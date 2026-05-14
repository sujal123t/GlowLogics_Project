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
                "Aoashi (Ao Ashi)",
                "Yūgo Kobayashi",
                349
        ));

        books.add(new Book(
                2,
                "Astro Boy",
                "Osamu Tezuka",
                279
        ));

        books.add(new Book(
                3,
                "Attack on Titan",
                "Tetsurō Araki",
                599
        ));

        books.add(new Book(
                4,
                "Berserk",
                "Kentaro Miura",
                899
        ));

        books.add(new Book(
                5,
                "Bleach",
                "Tite Kubo",
                459
        ));

        books.add(new Book(
                6,
                "Chainsaw Man",
                "Tatsuki Fujimoto",
                379
        ));

        books.add(new Book(
                7,
                "Death Note",
                "Tsugumi Ohba",
                649
        ));

        books.add(new Book(
                8,
                "Demon Slayer",
                "Koyoharu Gotouge",
                529
        ));

        books.add(new Book(
                9,
                "Dragon Ball",
                "Akira Toriyama",
                719
        ));

        books.add(new Book(
                10,
                "Fullmetal Alchemist",
                "Hiromu Arakawa",
                569
        ));

        books.add(new Book(
                11,
                "Hunter x Hunter",
                "Yoshihiro Togashi",
                689
        ));

        books.add(new Book(
                12,
                "Jujutsu Kaisen",
                "Gege Akutami",
                619
        ));

        books.add(new Book(
                13,
                "Kingdom",
                "Yasuhisa Hara",
                949
        ));

        books.add(new Book(
                14,
                "My Hero Academia",
                "Kohei Horikoshi",
                489
        ));

        books.add(new Book(
                15,
                "Naruto",
                "Masashi Kishimoto",
                739
        ));

        books.add(new Book(
                16,
                "One Piece",
                "Eiichiro Oda",
                999
        ));

        books.add(new Book(
                17,
                "One Punch Man",
                "One",
                429
        ));

        books.add(new Book(
                18,
                "Sakamoto Days",
                "Yuto Suzuki",
                399
        ));

        books.add(new Book(
                19,
                "Slam Dunk",
                "Takehiko Inoue",
                559
        ));

        books.add(new Book(
                20,
                "Spy x Family",
                "Tatsuya Endo",
                519
        ));

        books.add(new Book(
                21,
                "Tokyo Ghoul",
                "Sui Ishida",
                679
        ));

        books.add(new Book(
                22,
                "Tokyo Revengers",
                "Ken Wakui",
                469
        ));

        books.add(new Book(
                23,
                "Undead Unluck",
                "Yoshifumi Tozuka",
                389
        ));

        books.add(new Book(
                24,
                "Vagabond",
                "Takehiko Inoue",
                1099
        ));

        books.add(new Book(
                25,
                "Vinland Saga",
                "Makoto Yukimura",
                829
        ));
        return books;
    }
}