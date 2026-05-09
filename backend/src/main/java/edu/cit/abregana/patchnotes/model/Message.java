package edu.cit.abregana.patchnotes.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "messages")
@Data
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "sender_id", nullable = false)
    private User sender;

    @ManyToOne
    @JoinColumn(name = "receiver_id", nullable = false)
    private User receiver;

    @Column(nullable = false)
    private String content;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "is_read")
    private boolean read = false;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
    }
}