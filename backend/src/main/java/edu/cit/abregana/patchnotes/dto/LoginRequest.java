package edu.cit.abregana.patchnotes.dto;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}