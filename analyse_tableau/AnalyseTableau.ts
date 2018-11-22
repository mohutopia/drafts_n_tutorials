export class AnalyseTableau {
 constructor(
  public tableau: number[],
 ) {}

 // Créez une méthode sommeTableau qui renvoie la somme des valeurs contenues dans le tableau (utilisez unreturnpour renvoyer la valeur).
 sommeTableau(): number {
  let result = 0
  for (let i = 0; i < this.tableau.length; i++) {
   result += this.tableau[i]
  }
  return result
 }

 // Créez une méthode moyenneTableau qui calcule et renvoie la moyenne des valeurs.
 moyenneTableau(): number {
  return this.sommeTableau() / this.tableau.length
 }

 // Créez une méthode copierTableau qui prend en paramètre deux tableaux. Le contenu du premier tableau devra être copié dans le second tableau.
 copieTableau(tableauCopie: number[]): void {
  for (let i = 0; i < this.tableau.length; i++) {
   this.tableau[i] = tableauCopie[i]
  }
 }

 // Créez une méthode maximumTableau qui aura pour rôle de remettre à 0 toutes les cases du tableau ayant une valeur supérieure à un maximum. Cette fonction prendra en paramètres le tableau ainsi que le nombre maximum autorisé (valeurMax). Toutes les cases qui contiennent un nombre supérieur àvaleurMaxdoivent être mises à 0. 
 maximumTableau(valeurMax: number): void {
  for (let i =0; i < this.tableau.length; i++) {
   if (this.tableau[i] > valeurMax) {
    this.tableau[i] = 0
   }
  }
 }

 // Créez une méthode ordonnerTableau qui classe les valeurs d'un tableau dans l'ordre croissant. Ainsi, un tableau qui vaut {15, 81, 22, 13} doit à la fin de la fonction valoir {13, 15, 22, 81}.
 ordonnerTableau(): void {
  for (let i = 0; i < this.tableau.length; i++) {
   for (let j = 0; j < this.tableau.length; j++) {
    if (this.tableau[i] > this.tableau[j]) {
     this.tableau[i] = this.tableau[j];
    }
   }
  }
 }

}

let example: number[] = [15,81,22,13]
let example2: number[] = [13,5,46,52]
console.log(example)

let firstExample = new AnalyseTableau(example)
console.log("Somme: " + firstExample.sommeTableau())
console.log("Moyenne: " + firstExample.moyenneTableau())
firstExample.maximumTableau(14)
console.log(firstExample.tableau)
firstExample.copieTableau(example2)
console.log(firstExample.tableau)
firstExample.ordonnerTableau()
console.log(firstExample.tableau)