package edu.cit.abregana.patchnotes.features.auth;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}