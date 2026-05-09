package edu.cit.abregana.patchnotes.features.patches;

import edu.cit.abregana.patchnotes.dto.PatchRequest;
import edu.cit.abregana.patchnotes.dto.PostResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/patches")
@RequiredArgsConstructor
public class PatchController {

    private final PatchService patchService;

    @PostMapping
    public ResponseEntity<PatchResponse> createPatch(
            @RequestBody PatchRequest request,
            Principal principal) {
        return ResponseEntity.ok(patchService.createPatch(request, principal.getName()));
    }

    @GetMapping
    public ResponseEntity<List<PatchResponse>> getAllPatches(Principal principal) {
        return ResponseEntity.ok(patchService.getAllPatches(principal.getName()));
    }

    @GetMapping("/mine")
    public ResponseEntity<List<PatchResponse>> getMyPatches(Principal principal) {
        return ResponseEntity.ok(patchService.getMyPatches(principal.getName()));
    }

    @GetMapping("/trending")
    public ResponseEntity<List<PatchResponse>> getTrendingPatches(Principal principal) {
        return ResponseEntity.ok(patchService.getTrendingPatches(principal.getName()));
    }

    @PostMapping("/{patchId}/join")
    public ResponseEntity<PatchResponse> joinOrLeave(
            @PathVariable Long patchId,
            Principal principal) {
        return ResponseEntity.ok(patchService.joinOrLeavePatch(patchId, principal.getName()));
    }

    @GetMapping("/search")
    public ResponseEntity<List<PatchResponse>> searchPatches(
            @RequestParam String query,
            Principal principal) {
        return ResponseEntity.ok(patchService.searchPatches(query, principal.getName()));
    }

    @GetMapping("/{patchId}")
    public ResponseEntity<PatchResponse> getPatchById(
            @PathVariable Long patchId,
            Principal principal) {
        return ResponseEntity.ok(patchService.getPatchDetails(patchId, principal.getName()));
    }

    @GetMapping("/{patchId}/posts")
    public ResponseEntity<List<PostResponse>> getPatchPosts(@PathVariable Long patchId) {
        return ResponseEntity.ok(patchService.getPostsByPatch(patchId));
    }
}