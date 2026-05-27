// package edu.cit.abregana.patchnotes.controller;

// import edu.cit.abregana.patchnotes.dto.UpdateProfileRequest;
// import edu.cit.abregana.patchnotes.dto.UserResponse;
// import edu.cit.abregana.patchnotes.model.User;
// import edu.cit.abregana.patchnotes.repository.UserRepository;
// import lombok.RequiredArgsConstructor;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.core.Authentication;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;
// import java.util.stream.Collectors;

// @RestController
// @RequestMapping("/api/user")
// @RequiredArgsConstructor
// public class UserController {

//     private final UserRepository userRepository;

//     @GetMapping("/me")
//     public ResponseEntity<User> getCurrentUser(Authentication authentication) {
//         String email = authentication.getName();
//         User user = userRepository.findByEmail(email)
//                 .orElseThrow(() -> new RuntimeException("User not found"));
//         return ResponseEntity.ok(user);
//     }

//     @PutMapping("/me")
//     public ResponseEntity<User> updateProfile(
//             @RequestBody UpdateProfileRequest request,
//             Authentication authentication) {
//         String email = authentication.getName();
//         User user = userRepository.findByEmail(email)
//                 .orElseThrow(() -> new RuntimeException("User not found"));

//         if (request.getUsername() != null)
//             user.setUsername(request.getUsername());
//         if (request.getBio() != null)
//             user.setBio(request.getBio());
//         if (request.getFirstName() != null)
//             user.setFirstName(request.getFirstName());
//         if (request.getLastName() != null)
//             user.setLastName(request.getLastName());
//         if (request.getAge() != null)
//             user.setAge(request.getAge());
//         if (request.getGender() != null)
//             user.setGender(request.getGender());

//         userRepository.save(user);
//         return ResponseEntity.ok(user);
//     }

//     @GetMapping("/search")
//     public ResponseEntity<List<UserResponse>> searchUsers(@RequestParam String query) {
//         List<User> users = userRepository
//                 .findByUsernameContainingIgnoreCaseOrEmailContainingIgnoreCase(query, query);
//         List<UserResponse> responses = users.stream()
//                 .map(this::mapToResponse)
//                 .collect(Collectors.toList());
//         return ResponseEntity.ok(responses);
//     }

//     @GetMapping("/{email}")
//     public ResponseEntity<UserResponse> getUserByEmail(@PathVariable String email) {
//         User user = userRepository.findByEmail(email)
//                 .orElseThrow(() -> new RuntimeException("User not found"));
//         return ResponseEntity.ok(mapToResponse(user));
//     }

//     private UserResponse mapToResponse(User user) {
//         UserResponse response = new UserResponse();
//         response.setId(user.getId());
//         response.setUsername(user.getUsername());
//         response.setEmail(user.getEmail());
//         response.setFirstName(user.getFirstName());
//         response.setLastName(user.getLastName());
//         response.setBio(user.getBio());
//         response.setGender(user.getGender());
//         response.setAge(user.getAge());
//         return response;
//     }
// }

package edu.cit.abregana.patchnotes.controller;

import edu.cit.abregana.patchnotes.dto.UpdateProfileRequest;
import edu.cit.abregana.patchnotes.dto.UserResponse;
import edu.cit.abregana.patchnotes.model.Follow;
import edu.cit.abregana.patchnotes.model.User;
import edu.cit.abregana.patchnotes.repository.FollowRepository;
import edu.cit.abregana.patchnotes.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;
    private final FollowRepository followRepository;

    @GetMapping("/me")
    public ResponseEntity<User> getCurrentUser(Authentication authentication) {
        String email = authentication.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return ResponseEntity.ok(user);
    }

    @PutMapping("/me")
    public ResponseEntity<User> updateProfile(
            @RequestBody UpdateProfileRequest request,
            Authentication authentication) {
        String email = authentication.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (request.getUsername() != null) user.setUsername(request.getUsername());
        if (request.getBio() != null) user.setBio(request.getBio());
        if (request.getFirstName() != null) user.setFirstName(request.getFirstName());
        if (request.getLastName() != null) user.setLastName(request.getLastName());
        if (request.getAge() != null) user.setAge(request.getAge());
        if (request.getGender() != null) user.setGender(request.getGender());

        userRepository.save(user);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/search")
    public ResponseEntity<List<UserResponse>> searchUsers(
            @RequestParam String query,
            Authentication authentication) {
        String currentEmail = authentication.getName();
        User currentUser = userRepository.findByEmail(currentEmail).orElse(null);
        List<User> users = userRepository
                .findByUsernameContainingIgnoreCaseOrEmailContainingIgnoreCase(query, query)
                .stream()
                .filter(u -> !u.getEmail().equals(currentEmail))
                .collect(Collectors.toList());
        List<UserResponse> responses = users.stream()
                .map(u -> mapToResponse(u, currentUser))
                .collect(Collectors.toList());
        return ResponseEntity.ok(responses);
    }

    @GetMapping("/{email}")
    public ResponseEntity<UserResponse> getUserByEmail(
            @PathVariable String email,
            Authentication authentication) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        User currentUser = userRepository.findByEmail(authentication.getName()).orElse(null);
        return ResponseEntity.ok(mapToResponse(user, currentUser));
    }

    @PostMapping("/{email}/follow")
    public ResponseEntity<Map<String, Object>> toggleFollow(
            @PathVariable String email,
            Authentication authentication) {
        User follower = userRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new RuntimeException("User not found"));
        User following = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Optional<Follow> existing = followRepository.findByFollowerAndFollowing(follower, following);
        boolean isFollowing;
        if (existing.isPresent()) {
            followRepository.delete(existing.get());
            isFollowing = false;
        } else {
            Follow follow = new Follow();
            follow.setFollower(follower);
            follow.setFollowing(following);
            followRepository.save(follow);
            isFollowing = true;
        }
        return ResponseEntity.ok(Map.of("following", isFollowing));
    }

    @GetMapping("/friends")
    public ResponseEntity<List<UserResponse>> getFriends(Authentication authentication) {
        User user = userRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new RuntimeException("User not found"));
        List<UserResponse> friends = followRepository.findByFollower(user)
                .stream()
                .map(f -> mapToResponse(f.getFollowing(), user))
                .collect(Collectors.toList());
        return ResponseEntity.ok(friends);
    }

    private UserResponse mapToResponse(User user, User currentUser) {
        UserResponse response = new UserResponse();
        response.setId(user.getId());
        response.setUsername(user.getUsername());
        response.setEmail(user.getEmail());
        response.setFirstName(user.getFirstName());
        response.setLastName(user.getLastName());
        response.setBio(user.getBio());
        response.setGender(user.getGender());
        response.setAge(user.getAge());
        if (currentUser != null) {
            response.setFollowing(
                followRepository.existsByFollowerAndFollowing(currentUser, user)
            );
        }
        return response;
    }
}