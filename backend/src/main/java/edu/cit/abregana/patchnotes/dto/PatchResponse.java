// package edu.cit.abregana.patchnotes.dto;

// import lombok.Data;
// import java.time.LocalDateTime;

// @Data
// public class PatchResponse {
//     private Long id;
//     private String name;
//     private String description;
//     private String topic;
//     private String privacy;
//     private String icon;
//     private String createdBy;
//     private int memberCount;
//     private boolean isMember;
//     private LocalDateTime createdAt;
// }

package edu.cit.abregana.patchnotes.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class PatchResponse {
    private Long id;
    private String name;
    private String description;
    private String topic;
    private String privacy;
    private String icon;
    private String createdBy;
    private int memberCount;
    private boolean member; // true if the requesting user is a member
    private LocalDateTime createdAt;
}