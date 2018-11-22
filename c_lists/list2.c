// implements a list of numbers using a linked list
#include <stdlib.h>
#include <stdio.h>

typedef struct node
{
  int number;
  struct node *next;
}
node;

int main(void)
{
  // memory for numbers
  node *numbers = NULL;

  // prompt for numbers until EOF
  while (true)
  {
    // prompt for number
    int number;
    printf("Number: ");
    scanf("%d", &number);

    // check for EOF
    if (number == EOF)
    {
      break;
    }

    // allocate space for number
    node *n = malloc(sizeof(node));
    if (!n) // to quit without crashing
    {
      return 1;
    }

    // add number to list
    n->number = number;
    n->next = NULL;
    if (numbers)
    {
      for (node *ptr = numbers; ptr != NULL; ptr = ptr->next)
      {
        if (!ptr->next)
        {
          ptr->next = n;
          break;
        }
      }
    }
    else
    {
      numbers = n;
    }
  }

  // print numbers

}
