#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
  printf("Bienvenue dans le simple jeu PLUS OU MOINS! \n");
  // declarer les variables
  const int NOMBRE_MINIMUM = 1;
  int modeJeu, niveauDifficulte, nombreMaximum, nombreEntre, nombreMystere, nombreCoups = 0, continuerPartie = 1;

  srand(time(NULL)); // initialiser une seule fois

  while (continuerPartie) { // continuer a jouer tant que 1 sinon FIN
    // demander le mode de jeu1 1 ou 2 joueurs
    printf("\nMode de jeu:\n   1: un joueur.\n   2: deux joueurs.\n");
    scanf("%d", &modeJeu);
    printf("");
    if (modeJeu == 1) // si 1 joueur, l'ordinateur generera le nombre mystere
    {
      // demander le niveau de difficulte pour donner un nombre maximum
      printf("\nEntrez le niveau de difficulte:\n   1: nombre mystere entre 1 et 100.\n   2: nombre mystere entre 1 et 1000.\n   3: nombre mystere entre 1 et 10000.\n");
      scanf("%d", &niveauDifficulte);
      if (niveauDifficulte == 1) nombreMaximum = 100;
      else if (niveauDifficulte == 2) nombreMaximum = 1000;
      else if (niveauDifficulte == 3) nombreMaximum = 10000;
      nombreMystere = (rand() % (nombreMaximum - NOMBRE_MINIMUM + 1)) + NOMBRE_MINIMUM;
    }
    else if (modeJeu == 2) // si 2 joueurs, on demande d'entrez le nombre mystere pour que l'autre utilisateur le devine
    {
      printf("Entrez le nombre mystere pour que l'autre joueur le devine: ");
      scanf("%d", &nombreMystere);
    }
    // logique du jeu, deviner le nombre mystere
    do
    {
      printf("Quel est le nombre? ");
      scanf("%d", &nombreEntre);
      nombreCoups++; // incrementer le nombre de coups
      if (nombreEntre < nombreMystere) printf("C'est plus! \n");
      else if (nombreEntre > nombreMystere) printf("C'est moins! \n");
      else printf("Bravo, vous avez trouve le nombre mystere en %d coups.\n", nombreCoups);
    }
    while (nombreEntre != nombreMystere);
    // demander si l'utilisateur veut jouer de nouveau et reprendre la loupe
    printf("\nVoulez vous jouer une autre partie? \n");
    printf("Entrez 1 pour oui, 0 pour quitter. ");
    scanf("%d", &continuerPartie);
  }
  printf("\nFIN! \n");

  return 0;
}
