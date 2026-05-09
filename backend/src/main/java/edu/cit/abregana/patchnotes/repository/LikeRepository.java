package edu.cit.abregana.patchnotes.repository;

import edu.cit.abregana.patchnotes.model.Like;
import edu.cit.abregana.patchnotes.model.Post;
import edu.cit.abregana.patchnotes.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface LikeRepository extends JpaRepository<Like, Long> {
    Optional<Like> findByUserAndPost(User user, Post post);

    int countByPost(Post post);
}