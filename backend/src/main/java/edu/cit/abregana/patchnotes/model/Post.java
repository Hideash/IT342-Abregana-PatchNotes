// package edu.cit.abregana.patchnotes.model;

// import jakarta.persistence.*;
// import lombok.Data;
// import java.time.LocalDateTime;

// @Entity
// @Table(name = "posts")
// @Data
// public class Post {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     @Column(nullable = false)
//     private String content;

//     @Column
//     private String title;

//     @ManyToOne
//     @JoinColumn(name = "patch_id", nullable = true)
//     private Patch patch;

//     @ManyToOne
//     @JoinColumn(name = "user_id", nullable = false)
//     private User user;

//     @Column(name = "created_at")
//     private LocalDateTime createdAt;

//     @PrePersist
//     public void prePersist() {
//         this.createdAt = LocalDateTime.now();
//     }
// }

package edu.cit.abregana.patchnotes.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "posts")
@Data
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String content;

    @Column
    private String title;

    @Column
    private String imageUrl;

    @Column
    private String videoUrl;

    @Column
    private String gameTag;

    @ManyToOne
    @JoinColumn(name = "patch_id", nullable = true)
    private Patch patch;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
    }
}