package edu.cit.abregana.patchnotes.repository;

import edu.cit.abregana.patchnotes.model.Message;
import edu.cit.abregana.patchnotes.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {

    @Query("SELECT m FROM Message m WHERE (m.sender = :user1 AND m.receiver = :user2) OR (m.sender = :user2 AND m.receiver = :user1) ORDER BY m.createdAt ASC")
    List<Message> findConversation(@Param("user1") User user1, @Param("user2") User user2);

    @Query(value = "SELECT DISTINCT u.* FROM users u WHERE u.id IN (SELECT CASE WHEN m.sender_id = :userId THEN m.receiver_id ELSE m.sender_id END FROM messages m WHERE m.sender_id = :userId OR m.receiver_id = :userId)", nativeQuery = true)
    List<User> findConversationPartners(@Param("userId") Long userId);

    int countBySenderAndReceiverAndReadFalse(User sender, User receiver);
}