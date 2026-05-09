// package edu.cit.abregana.patchnotes.service;

// import edu.cit.abregana.patchnotes.dto.PatchRequest;
// import edu.cit.abregana.patchnotes.dto.PatchResponse;
// import edu.cit.abregana.patchnotes.dto.PostResponse;
// import edu.cit.abregana.patchnotes.model.Patch;
// import edu.cit.abregana.patchnotes.model.Post;
// import edu.cit.abregana.patchnotes.model.User;
// import edu.cit.abregana.patchnotes.repository.CommentRepository;
// import edu.cit.abregana.patchnotes.repository.LikeRepository;
// import edu.cit.abregana.patchnotes.repository.PatchRepository;
// import edu.cit.abregana.patchnotes.repository.PostRepository;
// import edu.cit.abregana.patchnotes.repository.UserRepository;
// import lombok.RequiredArgsConstructor;
// import org.springframework.stereotype.Service;

// import java.util.ArrayList;
// import java.util.List;
// import java.util.stream.Collectors;

// @Service
// @RequiredArgsConstructor
// public class PatchService {

//     private final PostRepository postRepository;
//     private final PatchRepository patchRepository;
//     private final UserRepository userRepository;
//     private final LikeRepository likeRepository;
//     private final CommentRepository commentRepository;

//     public PatchResponse createPatch(PatchRequest request, String email) {
//         User user = userRepository.findByEmail(email)
//                 .orElseThrow(() -> new RuntimeException("User not found"));

//         Patch patch = new Patch();
//         patch.setName(request.getName());
//         patch.setDescription(request.getDescription());
//         patch.setTopic(request.getTopic());
//         patch.setPrivacy(request.getPrivacy());
//         patch.setIcon(request.getIcon());
//         patch.setCreatedBy(user);
//         patch.setMembers(new ArrayList<>(List.of(user)));
//         patchRepository.save(patch);

//         return mapToResponse(patch, user);
//     }

//     public List<PatchResponse> getAllPatches(String email) {
//         User user = userRepository.findByEmail(email).orElse(null);
//         return patchRepository.findAllByOrderByCreatedAtDesc()
//                 .stream()
//                 .map(patch -> mapToResponse(patch, user))
//                 .collect(Collectors.toList());
//     }

//     public List<PatchResponse> getMyPatches(String email) {
//         User user = userRepository.findByEmail(email)
//                 .orElseThrow(() -> new RuntimeException("User not found"));
//         return patchRepository.findByMembersContaining(user)
//                 .stream()
//                 .map(patch -> mapToResponse(patch, user))
//                 .collect(Collectors.toList());
//     }

//     public List<PatchResponse> getTrendingPatches(String email) {
//         User user = userRepository.findByEmail(email).orElse(null);
//         return patchRepository.findAllByOrderByMemberCountDesc()
//                 .stream()
//                 .limit(5)
//                 .map(patch -> mapToResponse(patch, user))
//                 .collect(Collectors.toList());
//     }

//     public PatchResponse joinOrLeavePatch(Long patchId, String email) {
//         User user = userRepository.findByEmail(email)
//                 .orElseThrow(() -> new RuntimeException("User not found"));
//         Patch patch = patchRepository.findById(patchId)
//                 .orElseThrow(() -> new RuntimeException("Patch not found"));

//         if (patch.getMembers().contains(user)) {
//             patch.getMembers().remove(user);
//         } else {
//             patch.getMembers().add(user);
//         }
//         patchRepository.save(patch);

//         return mapToResponse(patch, user);
//     }

//     public List<PatchResponse> searchPatches(String query, String email) {
//         User user = userRepository.findByEmail(email).orElse(null);
//         return patchRepository.findByNameContainingIgnoreCase(query)
//                 .stream()
//                 .map(patch -> mapToResponse(patch, user))
//                 .collect(Collectors.toList());
//     }

//     public PatchResponse getPatchDetails(Long patchId, String email) {
//         Patch patch = patchRepository.findById(patchId)
//                 .orElseThrow(() -> new RuntimeException("Patch not found"));
//         User user = userRepository.findByEmail(email)
//                 .orElseThrow(() -> new RuntimeException("User not found"));
//         return mapToResponse(patch, user);
//     }

//     public List<PostResponse> getPostsByPatch(Long patchId) {
//         List<Post> posts = postRepository.findByPatch_IdOrderByCreatedAtDesc(patchId);
//         return posts.stream().map(post -> {
//             PostResponse res = new PostResponse();
//             res.setId(post.getId());
//             res.setTitle(post.getTitle());
//             res.setContent(post.getContent());
//             res.setUsername(post.getUser().getUsername());
//             res.setEmail(post.getUser().getEmail());
//             res.setCreatedAt(post.getCreatedAt());
//             res.setLikeCount(likeRepository.countByPost(post));
//             res.setCommentCount(commentRepository.countByPost(post));
//             return res;
//         }).collect(Collectors.toList());
//     }

//     private PatchResponse mapToResponse(Patch patch, User currentUser) {
//         PatchResponse response = new PatchResponse();
//         response.setId(patch.getId());
//         response.setName(patch.getName());
//         response.setDescription(patch.getDescription());
//         response.setTopic(patch.getTopic());
//         response.setPrivacy(patch.getPrivacy());
//         response.setIcon(patch.getIcon() != null ? patch.getIcon() : "🛡️");
//         response.setCreatedBy(patch.getCreatedBy().getUsername());
//         response.setMemberCount(patch.getMembers().size());
//         response.setMember(currentUser != null && patch.getMembers().contains(currentUser));
//         response.setCreatedAt(patch.getCreatedAt());
//         return response;
//     }
// }

package edu.cit.abregana.patchnotes.service;

import edu.cit.abregana.patchnotes.dto.PatchRequest;
import edu.cit.abregana.patchnotes.dto.PatchResponse;
import edu.cit.abregana.patchnotes.dto.PostResponse;
import edu.cit.abregana.patchnotes.model.Patch;
import edu.cit.abregana.patchnotes.model.Post;
import edu.cit.abregana.patchnotes.model.User;
import edu.cit.abregana.patchnotes.repository.PatchRepository;
import edu.cit.abregana.patchnotes.repository.PostRepository;
import edu.cit.abregana.patchnotes.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PatchService {

    private final PostRepository postRepository;
    private final PatchRepository patchRepository;
    private final UserRepository userRepository;

    public PatchResponse createPatch(PatchRequest request, String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Patch patch = new Patch();
        patch.setName(request.getName());
        patch.setDescription(request.getDescription());
        patch.setTopic(request.getTopic());
        patch.setPrivacy(request.getPrivacy());
        patch.setIcon(request.getIcon());
        patch.setCreatedBy(user);
        patch.setMembers(new ArrayList<>(List.of(user)));
        patchRepository.save(patch);

        return mapToResponse(patch, user);
    }

    public List<PatchResponse> getAllPatches(String email) {
        User user = userRepository.findByEmail(email).orElse(null);
        return patchRepository.findAllByOrderByCreatedAtDesc()
                .stream()
                .map(patch -> mapToResponse(patch, user))
                .collect(Collectors.toList());
    }

    public List<PatchResponse> getMyPatches(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return patchRepository.findByMembersContaining(user)
                .stream()
                .map(patch -> mapToResponse(patch, user))
                .collect(Collectors.toList());
    }

    /**
     * Returns patches sorted by member count descending (top 5 by default).
     * The frontend calls /api/patches/trending and slices as needed.
     */
    public List<PatchResponse> getTrendingPatches(String email) {
        User user = userRepository.findByEmail(email).orElse(null);
        return patchRepository.findAllByOrderByMemberCountDesc()
                .stream()
                .map(patch -> mapToResponse(patch, user))
                .collect(Collectors.toList());
    }

    public PatchResponse joinOrLeavePatch(Long patchId, String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        Patch patch = patchRepository.findById(patchId)
                .orElseThrow(() -> new RuntimeException("Patch not found"));

        if (patch.getMembers().contains(user)) {
            patch.getMembers().remove(user);
        } else {
            patch.getMembers().add(user);
        }
        patchRepository.save(patch);

        return mapToResponse(patch, user);
    }

    public List<PatchResponse> searchPatches(String query, String email) {
        User user = userRepository.findByEmail(email).orElse(null);
        return patchRepository.findByNameContainingIgnoreCase(query)
                .stream()
                .map(patch -> mapToResponse(patch, user))
                .collect(Collectors.toList());
    }

    public PatchResponse getPatchDetails(Long patchId, String email) {
        Patch patch = patchRepository.findById(patchId)
                .orElseThrow(() -> new RuntimeException("Patch not found"));
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return mapToResponse(patch, user);
    }

    public List<PostResponse> getPostsByPatch(Long patchId) {
        List<Post> posts = postRepository.findByPatch_IdOrderByCreatedAtDesc(patchId);
        return posts.stream().map(post -> {
            PostResponse res = new PostResponse();
            res.setId(post.getId());
            res.setTitle(post.getTitle());
            res.setContent(post.getContent());
            res.setUsername(post.getUser().getUsername());
            res.setEmail(post.getUser().getEmail());
            res.setCreatedAt(post.getCreatedAt());
            res.setLikeCount(0);
            res.setCommentCount(0);
            return res;
        }).toList();
    }

    private PatchResponse mapToResponse(Patch patch, User currentUser) {
        PatchResponse response = new PatchResponse();
        response.setId(patch.getId());
        response.setName(patch.getName());
        response.setDescription(patch.getDescription());
        response.setTopic(patch.getTopic());
        response.setPrivacy(patch.getPrivacy());
        response.setIcon(patch.getIcon() != null ? patch.getIcon() : "🛡️");
        response.setCreatedBy(patch.getCreatedBy().getUsername());
        response.setMemberCount(patch.getMembers().size());
        response.setMember(currentUser != null && patch.getMembers().contains(currentUser));
        response.setCreatedAt(patch.getCreatedAt());
        return response;
    }
}