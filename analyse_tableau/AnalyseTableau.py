class AnalyseTableau(object):
  def __init__(self, tableau):
    self.tableau = tableau
  
  def somme_tableau(self):
    somme = 0
    for i in range(len(self.tableau)):
      somme += self.tableau[i]
    return somme

  def moyenne_tableau(self):
    return self.somme_tableau() / len(self.tableau)
  
  def copie_tableau(self, copie_tableau):
    for i in range(len(self.tableau)):
      self.tableau[i] = copie_tableau[i]
  
  def maximum_tableau(self, valeur_max):
    for i in range(len(self.tableau)):
      if self.tableau[i] > valeur_max:
        self.tableau[i] = 0
  
  def ordonner_tableau(self):
    for i in range(len(self.tableau)):
      for j in range(len(self.tableau)):
        if self.tableau[i] > self.tableau[j]:
          self.tableau[i] = self.tableau[j]
