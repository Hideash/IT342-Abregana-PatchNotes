package edu.cit.abregana.patchnotes.dto;

import lombok.Data;

@Data
public class MessageRequest {
    private String receiverEmail;
    private String content;
}