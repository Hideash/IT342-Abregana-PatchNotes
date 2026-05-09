package edu.cit.abregana.patchnotes.features.posts;

import edu.cit.abregana.patchnotes.dto.PostRequest;
import edu.cit.abregana.patchnotes.dto.PostResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/posts")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @PostMapping
    public ResponseEntity<PostResponse> createPost(
            @RequestBody PostRequest request,
            Principal principal) {
        return ResponseEntity.ok(postService.createPost(request, principal.getName()));
    }

    @GetMapping
    public ResponseEntity<List<PostResponse>> getAllPosts(Principal principal) {
        String email = principal != null ? principal.getName() : null;
        return ResponseEntity.ok(postService.getAllPosts(email));
    }

    @PostMapping("/{postId}/like")
    public ResponseEntity<PostResponse> toggleLike(
            @PathVariable Long postId,
            Principal principal) {
        return ResponseEntity.ok(postService.toggleLike(postId, principal.getName()));
    }
}