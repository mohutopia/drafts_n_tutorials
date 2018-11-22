#include <stdio.h>
#include <stdlib.h>

int list0(void)
{
  int capacity;
  do
  {
    printf("Capacity: ");
    scanf("%d", &capacity);
  }
  while (capacity < 1);

  int numbers [capacity];
  int size = 0;

  while (size < capacity)
  {
    int number;
    printf("Number: ");
    scanf("%d", &number);

    numbers[size] = number;
    size++;
  }

  for (int i = 0; i < size; i++)
  {
    printf("You inputted %i", numbers[i]);
  }
}
