package edu.cit.abregana.patchnotes.controller;

import edu.cit.abregana.patchnotes.dto.CommentRequest;
import edu.cit.abregana.patchnotes.dto.CommentResponse;
import edu.cit.abregana.patchnotes.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/posts")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @PostMapping("/{postId}/comments")
    public ResponseEntity<CommentResponse> addComment(
            @PathVariable Long postId,
            @RequestBody CommentRequest request,
            Principal principal) {
        return ResponseEntity.ok(commentService.addComment(postId, request, principal.getName()));
    }

    @GetMapping("/{postId}/comments")
    public ResponseEntity<List<CommentResponse>> getComments(@PathVariable Long postId) {
        return ResponseEntity.ok(commentService.getComments(postId));
    }
}