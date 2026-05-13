package com.example.bookstore.service;

import com.example.bookstore.model.Book;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookService {

    public List<Book> getBooks() {

        List<Book> books = new ArrayList<>();

        books.add(new Book(
                1,
                "Atomic Habits",
                "James Clear",
                499
        ));

        books.add(new Book(
                2,
                "Rich Dad Poor Dad",
                "Robert Kiyosaki",
                399
        ));

        books.add(new Book(
                3,
                "Ikigai",
                "Hector Garcia",
                299
        ));

        return books;
    }
}