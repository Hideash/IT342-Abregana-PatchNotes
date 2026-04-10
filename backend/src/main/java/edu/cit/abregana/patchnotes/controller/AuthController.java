package edu.cit.abregana.patchnotes.controller;

import edu.cit.abregana.patchnotes.dto.AuthResponse;
import edu.cit.abregana.patchnotes.dto.LoginRequest;
import edu.cit.abregana.patchnotes.dto.RegisterRequest;
import edu.cit.abregana.patchnotes.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(userService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(userService.login(request));
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            return ResponseEntity.ok("Logged out successfully");
        }
        return ResponseEntity.ok("Logged out");
    }
}
