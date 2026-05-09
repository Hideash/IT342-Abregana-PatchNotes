package edu.cit.abregana.patchnotes.features.posts;

import edu.cit.abregana.patchnotes.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findAllByOrderByCreatedAtDesc();
    List<Post> findByPatch_IdOrderByCreatedAtDesc(Long patchId);
}