package edu.cit.abregana.patchnotes.dto;

import lombok.Data;

@Data
public class UpdateProfileRequest {
    private String username;
    private String bio;
    private String firstName;
    private String lastName;
    private Integer age;
    private String gender;
}