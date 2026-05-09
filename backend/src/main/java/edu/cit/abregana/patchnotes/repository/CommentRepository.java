package edu.cit.abregana.patchnotes.repository;

import edu.cit.abregana.patchnotes.model.Comment;
import edu.cit.abregana.patchnotes.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByPostOrderByCreatedAtAsc(Post post);

    int countByPost(Post post);
}