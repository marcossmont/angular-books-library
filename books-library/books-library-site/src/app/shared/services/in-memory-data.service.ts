import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Author } from '../entities/author';
import { Book } from '../entities/book';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const authors = [
      { id: 1, name: 'J. R. R. Tolkien', birthDate: "1892-1-3", nationality: "British" },
      { id: 2, name: 'J. K. Rowling', birthDate: "1965-7-31", nationality: "British" },
      { id: 3, name: 'George R. R. Martin', birthDate: "1948-9-20", nationality: "North American" }
    ];

    const books = [
      { 
        id: 1, 
        name: 'The Lord of the Rings: The Fellowship of the Ring', 
        publicationYear: "1954", 
        author: authors[0], 
        description: "The Fellowship of the Ring is the first of three volumes in The Lord of the Rings, an epic set in the fictional world of Middle-earth. The Lord of the Rings is an entity named Sauron, the Dark Lord, who long ago lost the One Ring that contains much of his power. His overriding desire is to reclaim the Ring and use it to enslave all of Middle-earth." 
      },
      { 
        id: 2, 
        name: 'The Lord of the Rings: The Two Towers', 
        publicationYear: "1954", 
        author: authors[0], 
        description: "Two Towers is composed of Books 3 and 4, recounting the deeds of the company after the breaking of the Fellowship of the Ring. The story begins with the repentance and death of Boromir, who has tried (unsuccessfully) to wrest the ring away from Frodo." 
      },
      { 
        id: 3, 
        name: 'The Return of the King', 
        publicationYear: "1955", 
        author: authors[0], 
        description: "The Return of the King, the third and final volume in The Lord of the Rings, opens as Gandalf and Pippin ride east to the city of Minas Tirith in Gondor, just after parting with King Théoden and the Riders of Rohan at the end of The Two Towers." 
      },
      {
        id: 4,
        name: "Harry Potter and the Philosopher's Stone",
        publicationYear: "1997",
        author: authors[1],
        description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old."
      },
      {
        id: 5,
        name: "Harry Potter and the Chamber of Secrets",
        publicationYear: "1998",
        author: authors[1],
        description: "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the \"Chamber of Secrets\" has been opened and that the \"heir of Slytherin\" would kill all pupils who do not come from all-magical families. These threats are found after attacks which leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks."
      },
      {
        id: 6,
        name: "Harry Potter and the Prisoner of Azkaban",
        publicationYear: "1999",
        author: authors[1],
        description: "Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J. K. Rowling and the third in the Harry Potter series. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ronald Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban who they believe is one of Lord Voldemort's old allies."
      },
      {
        id: 7,
        name: "A Song of Ice and Fire: A Game of Thrones",
        publicationYear: "1996",
        author: authors[2],
        description: "Most of the events in A Song of Ice and Fire take place on the two continents Westeros and Essos. In the Seven Kingdoms of Westeros, a cycle of seasons exists where summers can last a decade or more, and winters a lifetime. The Seven Kingdoms—actually nine large regions—are each overseen by one of the Great Houses of Westeros."
      },
      {
        id: 8,
        name: "A Song of Ice and Fire: A Clash of Kings",
        publicationYear: "1998",
        author: authors[2],
        description: "The civil wars in Westeros continue to escalate. Young King Joffrey sits on the Iron Throne in King's Landing, opposed by Stannis Baratheon, the elder of the surviving Baratheons. Stannis's claim, however, is being challenged by his younger brother, Renly, who has the support of many of the Westeros lords, and by Robb Stark, who has been named King in the North by his supporters."
      },
      {
        id: 9,
        name: "A Song of Ice and Fire: A Storm of Swords",
        publicationYear: "2005",
        author: authors[2],
        description: "A Storm of Swords is a reference to the wars raging throughout Westeros and to the scores of murders and betrayals in this bloodiest and most violent of the books."
      }
    ];

    return { authors, books };
  }

  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map(books => books.id)) + 1 : 1;
  }
}