// package edu.cit.abregana.patchnotes.dto;

// import lombok.Data;

// @Data
// public class PostRequest {
//     private String title;
//     private String content;
//     private Long patchId; // optional — used by Forge page to assign post to a patch
// }

package edu.cit.abregana.patchnotes.dto;

import lombok.Data;

@Data
public class PostRequest {
    private String title;
    private String content;
    private String imageUrl;
    private String videoUrl;
    private String gameTag;
    private Long patchId;
}