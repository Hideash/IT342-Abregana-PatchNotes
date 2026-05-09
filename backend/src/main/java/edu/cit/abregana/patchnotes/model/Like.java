package edu.cit.abregana.patchnotes.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "likes")
@Data
public class Like {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "post_id", nullable = false)
    private Post post;
}