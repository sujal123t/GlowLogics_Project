package com.example.bookstore.controller;

import com.example.bookstore.model.Book;
import com.example.bookstore.service.BookService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class BookController {

    @Autowired
    BookService service;

    @GetMapping("/books")
    public List<Book> getBooks() {

        return service.getBooks();
    }
}