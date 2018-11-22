// EXERCICES OPENCLASSROOMS - C programming language

// prototypes
int sommeTableau(int tableau[], int tailleTableau);
double moyenneTableau(int tableau[], int tailleTableau);
void copie(int tableauOriginal[], int tableauCopie[], int tailleTableau);
void maximumTableau(int tableau[], int tailleTableau, int valeurMax);
void ordonnerTableau(int tableau[], int tailleTableau);

int main(void) 
{
 // ...
}

// Créez une fonction sommeTableau qui renvoie la somme des valeurs contenues dans le tableau (utilisez unreturnpour renvoyer la valeur).
int sommeTableau(int tableau[], int tailleTableau)
{
 int result = 0;
 for(int i = 0; i < tailleTableau; i++)
 {
  result += tableau[i];
 }
 return result;
}

// Créez une fonction moyenneTableau qui calcule et renvoie la moyenne des valeurs. 
double moyenneTableau(int tableau[], int tailleTableau)
{
 return sommeTableau(*tableau, tailleTableau) / tailleTableau;
}

// Créez une fonction copierTableauqui prend en paramètre deux tableaux. Le contenu du premier tableau devra être copié dans le second tableau.
void copie(int tableauOriginal[], int tableauCopie[], int tailleTableau)
{
 for(int i = 0; i < tailleTableau; i++)
 {
  tableauOriginal[i] = tableauCopie[i];
 }
}

// Créez une fonction maximumTableau qui aura pour rôle de remettre à 0 toutes les cases du tableau ayant une valeur supérieure à un maximum. Cette fonction prendra en paramètres le tableau ainsi que le nombre maximum autorisé (valeurMax). Toutes les cases qui contiennent un nombre supérieur àvaleurMaxdoivent être mises à 0. 
void maximumTableau(int tableau[], int tailleTableau, int valeurMax)
{
 for(int i = 0;  i < tailleTableau; i++)
 {
  if(tableau[i] > valeurMax)
  {
   tableau[i] = 0;
  }
 }
}

// Cet exercice est plus difficile. Créez une fonction ordonnerTableau qui classe les valeurs d'un tableau dans l'ordre croissant. Ainsi, un tableau qui vaut {15, 81, 22, 13} doit à la fin de la fonction valoir {13, 15, 22, 81}.
void ordonnerTableau(int tableau[], int tailleTableau)
{
 for (int i = 0; i < tailleTableau; i++)
 {
  for (int j = 0; j < tailleTableau; j++)
  {
   if (tableau[i] > tableau[j])
   {
    tableau[i] = tableau[j];
   }
  }
 }
}
