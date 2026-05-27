package edu.cit.abregana.patchnotes.security;

import edu.cit.abregana.patchnotes.model.User;
import edu.cit.abregana.patchnotes.repository.UserRepository;
import edu.cit.abregana.patchnotes.service.JwtService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class OAuth2LoginSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final UserRepository userRepository;
    private final JwtService jwtService;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
            HttpServletResponse response,
            Authentication authentication) throws IOException {
        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();

        String email = oAuth2User.getAttribute("email");
        String firstName = oAuth2User.getAttribute("given_name");
        String lastName = oAuth2User.getAttribute("family_name");
        String name = oAuth2User.getAttribute("name");

        // Find or create user
        Optional<User> existingUser = userRepository.findByEmail(email);
        User user;

        if (existingUser.isPresent()) {
            user = existingUser.get();
        } else {
            user = new User();
            user.setEmail(email);
            user.setPassword("GOOGLE_OAUTH_" + System.currentTimeMillis());
            user.setUsername(email.split("@")[0]);
            user.setFirstName(firstName != null ? firstName : name);
            user.setLastName(lastName != null ? lastName : "");
            userRepository.save(user);
        }

        String token = jwtService.generateToken(user.getEmail());

        // Redirect to frontend with token
        response.sendRedirect("http://localhost:5173/oauth/callback?token=" + token);
    }
}