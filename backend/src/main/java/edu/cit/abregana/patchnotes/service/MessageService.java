package edu.cit.abregana.patchnotes.service;

import edu.cit.abregana.patchnotes.dto.MessageRequest;
import edu.cit.abregana.patchnotes.dto.MessageResponse;
import edu.cit.abregana.patchnotes.features.users.UserRepository;
import edu.cit.abregana.patchnotes.model.Message;
import edu.cit.abregana.patchnotes.model.User;
import edu.cit.abregana.patchnotes.repository.MessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MessageService {

    private final MessageRepository messageRepository;
    private final UserRepository userRepository;

    public MessageResponse sendMessage(MessageRequest request, String senderEmail) {
        User sender = userRepository.findByEmail(senderEmail)
                .orElseThrow(() -> new RuntimeException("Sender not found"));
        User receiver = userRepository.findByEmail(request.getReceiverEmail())
                .orElseThrow(() -> new RuntimeException("Receiver not found"));

        Message message = new Message();
        message.setSender(sender);
        message.setReceiver(receiver);
        message.setContent(request.getContent());
        messageRepository.save(message);

        return mapToResponse(message);
    }

    public List<MessageResponse> getConversation(String currentEmail, String otherEmail) {
        User current = userRepository.findByEmail(currentEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));
        User other = userRepository.findByEmail(otherEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<Message> messages = messageRepository.findConversation(current, other);
        messages.stream()
                .filter(m -> m.getReceiver().equals(current) && !m.isRead())
                .forEach(m -> {
                    m.setRead(true);
                    messageRepository.save(m);
                });

        return messages.stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public List<UserResponse2> getConversationPartners(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return messageRepository.findConversationPartners(user)
                .stream()
                .map(u -> {
                    UserResponse2 r = new UserResponse2();
                    r.setUsername(u.getUsername());
                    r.setEmail(u.getEmail());
                    r.setUnreadCount(messageRepository
                            .countBySenderAndReceiverAndReadFalse(u, user));
                    return r;
                })
                .collect(Collectors.toList());
    }

    private MessageResponse mapToResponse(Message message) {
        MessageResponse response = new MessageResponse();
        response.setId(message.getId());
        response.setSenderUsername(message.getSender().getUsername());
        response.setSenderEmail(message.getSender().getEmail());
        response.setReceiverUsername(message.getReceiver().getUsername());
        response.setReceiverEmail(message.getReceiver().getEmail());
        response.setContent(message.getContent());
        response.setRead(message.isRead());
        response.setCreatedAt(message.getCreatedAt());
        return response;
    }

    @lombok.Data
    public static class UserResponse2 {
        private String username;
        private String email;
        private int unreadCount;
    }
}