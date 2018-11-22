#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>

int main(int argc, char const *argv[])
{
 char *s = "Hello world"; // init string variable
 char *t = malloc((strlen(s) + 1) * sizeof(char)); // allocate memory for another string
 if (!t) return 1;
 
 for (int i = 0, n = strlen(s); i <= n; i++) t[i] = s[i]; // copy string into memory
 // or use strcpy()
 // strcpy(t, s);

 if (strlen(t) > 0) t[0] = toupper(t[0]); // capitalize first letter of copy
 printf("s: %s\n", s);
 printf("t: %s\n", t);
 return 0; // if everything goes right
}
