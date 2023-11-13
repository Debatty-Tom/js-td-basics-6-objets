/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)
2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/
function creatPerson(fullName, mass, height){
    return {
        fullName: fullName,
        mass: mass,
        height: height,
        bmi() {
            return this.mass / (this.height * this.height);
        }
    }
}
const mark = creatPerson('Mark', 69,1.72);
const john = creatPerson('John', 79,1.82);
console.log(mark, john);

if (mark.bmi() > john.bmi()) {
    console.log(`la Bmi de ${mark.fullName}(${mark.bmi()}) est plus grande que la Bmi de ${john.fullName}(${john.bmi()})`)
} else if (john.bmi() > mark.bmi()) {
    console.log(`la Bmi de ${john.fullName}(${john.bmi()}) est plus grande que la Bmi de ${mark.fullName}(${mark.bmi()})`)
} else {
    console.log(`la Bmi de ${john.fullName}(${john.bmi()}) est égale à la Bmi de ${mark.fullName}(${mark.bmi()})`)
}