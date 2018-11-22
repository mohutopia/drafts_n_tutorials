using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace csharp_consoleApp
{
    // we can have static classes that cannot have instances like the built-in Math static class
    class Book
    {
        public string title;
        public string author;
        public int pages;

        private string rating;

        public static int bookCount = 0; // static proprety, means it's not a proprety of the class' instance but a proprety of the class itself

        public Book(string aTitle, string aAuthor, int aPages, string aRating) // this is the constructor
        {
            title = aTitle;
            author = aAuthor;
            pages = aPages;
            Rating = aRating;
            bookCount++; // this means that everytime we create an instance of this class the bookCount will get incremented
        }
        // we can also have static methods that cannot be called by the instance
        public virtual bool Published()
        {
            return true;
        }
        // by adding the virtual keyword, it means that the subclasses can override the content
        // when creating a subclass by -->   class SubBook : Book {}
        // we have to specify -->   public override bool Published() { ... }

        // getters and setters
        public string Rating
        {
            get { return rating; }
            set {
                if (value == "G" || value == "PG" || value == "R" || value == "NR")
                {
                    rating = value;
                }
                else
                {
                    rating = "NR";
                }
            }
        }

    }
}
