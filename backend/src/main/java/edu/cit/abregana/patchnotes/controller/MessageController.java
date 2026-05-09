package edu.cit.abregana.patchnotes.controller;

import edu.cit.abregana.patchnotes.dto.MessageRequest;
import edu.cit.abregana.patchnotes.dto.MessageResponse;
import edu.cit.abregana.patchnotes.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/messages")
@RequiredArgsConstructor
public class MessageController {

    private final MessageService messageService;

    @PostMapping
    public ResponseEntity<MessageResponse> sendMessage(
            @RequestBody MessageRequest request,
            Principal principal) {
        return ResponseEntity.ok(messageService.sendMessage(request, principal.getName()));
    }

    @GetMapping("/conversation/{otherEmail}")
    public ResponseEntity<List<MessageResponse>> getConversation(
            @PathVariable String otherEmail,
            Principal principal) {
        return ResponseEntity.ok(messageService.getConversation(principal.getName(), otherEmail));
    }

    @GetMapping("/partners")
    public ResponseEntity<List<MessageService.UserResponse2>> getPartners(Principal principal) {
        return ResponseEntity.ok(messageService.getConversationPartners(principal.getName()));
    }
}