#include <stdio.h>
#include <stdlib.h>

int list1(void)
{
  int *numbers = NULL;
  int capacity = 0;

  printf("To quit the program, press 0\n\n");

  int size = 0;
  while (1)
  {
    int number;
    printf("Number: ");
    scanf("%d", &number);

    if (number == 0)
    {
      break;
    }

    if (size == capacity)
    {
      numbers = realloc(numbers, sizeof(int) * (size++));
      capacity++;
    }

    numbers[size] = number;
    size++;
  }

  for (int i = 0; i < size; i++)
  {
    printf("You inputted %i\n", numbers[i]);
  }
  free(numbers);
}
