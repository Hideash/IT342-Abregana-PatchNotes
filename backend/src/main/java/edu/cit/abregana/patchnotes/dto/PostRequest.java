// package edu.cit.abregana.patchnotes.dto;

// import lombok.Data;

// @Data
// public class PostRequest {
//     private String title;
//     private String content;
// }

package edu.cit.abregana.patchnotes.dto;

import lombok.Data;

@Data
public class PostRequest {
    private String title;
    private String content;
    private Long patchId; // optional — used by Forge page to assign post to a patch
}