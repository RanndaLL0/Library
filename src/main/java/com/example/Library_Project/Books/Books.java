package com.example.Library_Project.Books;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Books {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(nullable = false, length = 5)
    private int pages;

    @Column(nullable = false)
    private double price;

    @Column(nullable = true)
    private String cover;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String description;
}
