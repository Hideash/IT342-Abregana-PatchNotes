// package edu.cit.abregana.patchnotes.dto;

// import lombok.Data;

// @Data
// public class UserResponse {
//     private Long id;
//     private String username;
//     private String email;
//     private String firstName;
//     private String lastName;
//     private String bio;
//     private String gender;
//     private Integer age;
// }

package edu.cit.abregana.patchnotes.dto;

import lombok.Data;

@Data
public class UserResponse {
    private Long id;
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private String bio;
    private String gender;
    private Integer age;
    private boolean following;
}