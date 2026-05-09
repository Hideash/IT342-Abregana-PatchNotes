package edu.cit.abregana.patchnotes.repository;

import edu.cit.abregana.patchnotes.model.Patch;
import edu.cit.abregana.patchnotes.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface PatchRepository extends JpaRepository<Patch, Long> {
    List<Patch> findAllByOrderByCreatedAtDesc();
    List<Patch> findByMembersContaining(User user);
    List<Patch> findByNameContainingIgnoreCase(String name);

    @Query("SELECT p FROM Patch p ORDER BY SIZE(p.members) DESC")
    List<Patch> findAllByOrderByMemberCountDesc();
}