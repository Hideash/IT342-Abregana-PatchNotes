// package edu.cit.abregana.patchnotes.dto;

// import lombok.Data;
// import java.time.LocalDateTime;

// @Data
// public class PostResponse {
//     private Long id;
//     private String title;
//     private String content;
//     private String username;
//     private String email;
//     private LocalDateTime createdAt;
//     private int likeCount;
//     private boolean likedByCurrentUser;
//     private int commentCount;
// }

package edu.cit.abregana.patchnotes.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class PostResponse {
    private Long id;
    private String title;
    private String content;
    private String imageUrl;
    private String videoUrl;
    private String gameTag;
    private String username;
    private String email;
    private Long patchId;
    private String patchName;
    private LocalDateTime createdAt;
    private int likeCount;
    private boolean likedByCurrentUser;
    private int commentCount;
}