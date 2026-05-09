package edu.cit.abregana.patchnotes.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "patches")
@Data
public class Patch {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column
    private String description;

    @Column
    private String topic;

    @Column
    private String privacy;

    @Column
    private String icon;

    @ManyToOne
    @JoinColumn(name = "created_by", nullable = false)
    private User createdBy;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @ManyToMany
    @JoinTable(name = "patch_members", joinColumns = @JoinColumn(name = "patch_id"), inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<User> members;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
    }
}