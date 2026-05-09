package edu.cit.abregana.patchnotes.security;

import edu.cit.abregana.patchnotes.service.JwtService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    // @Override
    // protected void doFilterInternal(HttpServletRequest request,
    // HttpServletResponse response,
    // FilterChain filterChain) throws ServletException, IOException {
    // String authHeader = request.getHeader("Authorization");
    // if (authHeader == null || !authHeader.startsWith("Bearer ")) {
    // filterChain.doFilter(request, response);
    // return;
    // }
    // String token = authHeader.substring(7);
    // String email = jwtService.extractEmail(token);
    // if (email != null && SecurityContextHolder.getContext().getAuthentication()
    // == null) {
    // UserDetails userDetails = userDetailsService.loadUserByUsername(email);
    // if (jwtService.isTokenValid(token, userDetails)) {
    // UsernamePasswordAuthenticationToken authToken = new
    // UsernamePasswordAuthenticationToken(userDetails,
    // null, userDetails.getAuthorities());
    // authToken.setDetails(new
    // WebAuthenticationDetailsSource().buildDetails(request));
    // SecurityContextHolder.getContext().setAuthentication(authToken);
    // }
    // }
    // filterChain.doFilter(request, response);
    // }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException {

        String authHeader = request.getHeader("Authorization");
        String token = null;
        String email = null;

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            token = authHeader.substring(7);
            try {
                // This is the line that was throwing the Exception
                email = jwtService.extractEmail(token);
            } catch (io.jsonwebtoken.ExpiredJwtException e) {
                // Silently handle expiration so the request can still proceed
                System.out.println("JWT token is expired");
            } catch (Exception e) {
                System.out.println("JWT extraction failed: " + e.getMessage());
            }
        }

        // Only attempt authentication if we successfully extracted an email
        if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = userDetailsService.loadUserByUsername(email);

            if (jwtService.isTokenValid(token, userDetails)) {
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }

        // Always call this to move to the next filter/controller
        filterChain.doFilter(request, response);
    }

}