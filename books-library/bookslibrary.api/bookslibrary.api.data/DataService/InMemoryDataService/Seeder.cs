using bookslibrary.api.domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace bookslibrary.api.data.DataService.InMemoryDataService
{    
    public static class Seeder
    {
        public static void Seed(InMemoryDbContext dbContext)
        {
            var empresas = dbContext.Set<Author>().ToList();

            if (empresas.Count == 0)
            {
                Author tolkien = dbContext.Set<Author>().Add(new Author("J. R. R. Tolkien", "British", new DateTime(1892, 1, 3))).Entity;
                Author rowling = dbContext.Set<Author>().Add(new Author("J. K. Rowling", "British", new DateTime(1965, 7, 31))).Entity;
                Author martin = dbContext.Set<Author>().Add(new Author("George R. R. Martin", "North American", new DateTime(1948, 9, 20))).Entity;

                dbContext.Set<Book>().Add(new Book(1, "The Lord of the Rings: The Fellowship of the Ring", tolkien, 1954, "The Fellowship of the Ring is the first of three volumes in The Lord of the Rings, an epic set in the fictional world of Middle-earth. The Lord of the Rings is an entity named Sauron, the Dark Lord, who long ago lost the One Ring that contains much of his power. His overriding desire is to reclaim the Ring and use it to enslave all of Middle-earth."));
                dbContext.Set<Book>().Add(new Book(2, "The Lord of the Rings: The Two Towers", tolkien, 1954, "Two Towers is composed of Books 3 and 4, recounting the deeds of the company after the breaking of the Fellowship of the Ring. The story begins with the repentance and death of Boromir, who has tried (unsuccessfully) to wrest the ring away from Frodo."));
                dbContext.Set<Book>().Add(new Book(3, "The Lord of the Rings: The Return of the King", tolkien, 1955, "The Return of the King, the third and final volume in The Lord of the Rings, opens as Gandalf and Pippin ride east to the city of Minas Tirith in Gondor, just after parting with King Théoden and the Riders of Rohan at the end of The Two Towers."));
                dbContext.Set<Book>().Add(new Book(4, "Harry Potter and the Philosopher's Stone", rowling, 1997, "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old."));
                dbContext.Set<Book>().Add(new Book(5, "Harry Potter and the Chamber of Secrets", rowling, 1998, "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the \"Chamber of Secrets\" has been opened and that the \"heir of Slytherin\" would kill all pupils who do not come from all-magical families. These threats are found after attacks which leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks."));
                dbContext.Set<Book>().Add(new Book(6, "Harry Potter and the Prisoner of Azkaban", rowling, 1999, "Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J. K. Rowling and the third in the Harry Potter series. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ronald Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban who they believe is one of Lord Voldemort's old allies."));
                dbContext.Set<Book>().Add(new Book(7, "A Song of Ice and Fire: A Game of Thrones", martin, 1996, "Most of the events in A Song of Ice and Fire take place on the two continents Westeros and Essos. In the Seven Kingdoms of Westeros, a cycle of seasons exists where summers can last a decade or more, and winters a lifetime. The Seven Kingdoms—actually nine large regions—are each overseen by one of the Great Houses of Westeros."));
                dbContext.Set<Book>().Add(new Book(8, "A Song of Ice and Fire: A Clash of Kings", martin, 1998, "The civil wars in Westeros continue to escalate. Young King Joffrey sits on the Iron Throne in King's Landing, opposed by Stannis Baratheon, the elder of the surviving Baratheons. Stannis's claim, however, is being challenged by his younger brother, Renly, who has the support of many of the Westeros lords, and by Robb Stark, who has been named King in the North by his supporters."));
                dbContext.Set<Book>().Add(new Book(9, "A Song of Ice and Fire: A Storm of Sword", martin, 2005, "A Storm of Swords is a reference to the wars raging throughout Westeros and to the scores of murders and betrayals in this bloodiest and most violent of the books."));

                dbContext.SaveChanges();
            }
        }
    }
}
