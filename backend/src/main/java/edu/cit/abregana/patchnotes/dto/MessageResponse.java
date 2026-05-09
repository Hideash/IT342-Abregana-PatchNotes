package edu.cit.abregana.patchnotes.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class MessageResponse {
    private Long id;
    private String senderUsername;
    private String senderEmail;
    private String receiverUsername;
    private String receiverEmail;
    private String content;
    private boolean read;
    private LocalDateTime createdAt;
}