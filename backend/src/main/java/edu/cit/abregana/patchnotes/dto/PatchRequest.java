package edu.cit.abregana.patchnotes.dto;

import lombok.Data;

@Data
public class PatchRequest {
    private String name;
    private String description;
    private String topic;
    private String privacy;
    private String icon;
}