using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace csharp_consoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("*  _____________ *");
            Console.WriteLine("  |             |");
            Console.WriteLine("  | Hello World |");
            Console.WriteLine("  |_____________|");
            Console.WriteLine("*                *");

            Book book1 = new Book("Beyond Good and Evil", "Nietzsche", 355, "dog"); 
            // dog won't be set cause we specified using a setter what we can enter
            // Book.bookCount will become 1

            Console.ReadLine();
        }
    }



    class Tutorial
    {
        // talking about variables and data types
        static void VariablesTutorial(string[] args)
        {
            string characterName = "Moh";
            int characterAge = 23;
            char grade = 'B';
            double gpa = 3.2; // double, float, decimal
            bool isMale = true;

            Console.WriteLine("There once was a man named " + characterName);
            Console.WriteLine("He was " + characterAge + " years old");
            Console.WriteLine("He really liked when he got a grade " + grade);
            Console.WriteLine("But didn't like his GPA of " + gpa);

            Console.ReadLine();
        }

        // working with strings and numbers
        static void WorkingData(string[] args)
        {
            string phrase = "Hello there";
            // phrase.Lengh; phrase.ToUpper();
            // phrase.Contains("there"); --> returns: true
            // phrase[0]; --> phrase's first char: H
            // phrase.IndexOf('e'); --> returns: 1
            // phrase.Substring(phrase.IndexOf("there")); --> returns: there

            const double random = Math.PI; // returns 3.14....
            double power = Math.Pow(5, 2); // returns 25
            double squareRoot = Math.Sqrt(36); // returns 6

            Console.ReadLine();
        }

        // getting user input
        static void UserInput(string[] args)
        {
            Console.Write("Enter your name: ");
            string name = Console.ReadLine();

            Console.WriteLine("Hello " + name);
            Console.WriteLine("Let's make some additions!");

            Console.Write("Enter the first number: ");
            double number1 = Convert.ToDouble(Console.ReadLine());

            Console.Write("Enter the second number: ");
            double number2 = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine(number1 + number2);

            Console.ReadLine();
        }

        // arrays
        static void ArraysTutorial(string[] args)
        {
            int[] luckyNumbers = { 0, 1, 2, 3 };
            string[] names = new string[10]; // tell the program that this array will hold 10 elements

            // 2D array
            int[,] numberGrid =
            {
                {1, 2},
                {3, 4},
                {5, 6}
            };

            //or to define the size of an array without giving it elements
            int[,] FixedArray = new int[2, 3]; // an array that has 2 elements that are arrays containing 3 elements

            Console.WriteLine(numberGrid[0, 1]); // returns 2
            Console.WriteLine(numberGrid[2, 0]); // returns 5
        }

        // exception handling
        static void ExceptionHandling()
        {
            try
            {
                Console.Write("Enter a number: ");
                double num1 = Convert.ToDouble(Console.ReadLine());

                Console.Write("Enter another number: ");
                double num2 = Convert.ToDouble(Console.ReadLine());

                Console.WriteLine(num1 / num2);
            }
            // useful to catch different types of errors to be able to handle them seperatly. If you want to just catch all errors: catch(Exception e){}
            catch (DivideByZeroException e) // only catches errors related to dividing by 0
            {
                Console.WriteLine("Eroor: " + e.Message);
            }
            catch (FormatException e) // only catches format errors
            {
                Console.WriteLine("Eroor: " + e.Message);
            }
            finally // executes no matter what
            {
                Console.WriteLine("Take care.");
            }
            
            Console.ReadLine();
        }
    }
}
