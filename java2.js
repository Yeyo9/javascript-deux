/*Enoncé 1*/

let nom = ["saisir votre nom"]
console.log(nom)
/* en utilisant console.log , ça affiche la chaine de caractères*/

let noms = ["Marie", "Pierre", "Paul", "Jacques"]
console.log(noms[0]);
console.log(noms[1]);
console.log(noms[2]);
console.log(noms[3]);

/* en utilisant plusieurs fois console.log , ça affiche le tableau avec le contenant de la chaine de caractères*/

let names = ["Vous avez saisi 4 noms: ", "Marie, ","Pierre, ","Paul, ", "Jacques. ", "C'est beaucoup de noms !"];

console.log(names.join(''))

/* en utilisant la fonction .join(), ça rassemble le contenant de la chaine de caractères, ça enlève les doubles cotes*/

let plusieursnoms = ["Marie","Pierre","Paul", "Jacques"]
for(let i=0; i < plusieursnoms.length; i++)
{
    console.log(plusieursnoms[i]);
} 

/* en utilisant la fonction for , ça affiche le tableau*/

/* Enoncé 2 */

let min=0;
let max=10;
let random = Math.random() * (+max - +min) + +min;
console.log(parseInt(random));
    

/* en utilisant la fonction math.random suivi du convertisseur parseInt , ça affiche un entier au hasard*/

let multip = [5]
for(let i=1; i <=10; i++)

{
    let result = i * multip;

    console.log(`${multip} * ${i} = ${result}`);
}

/* en utilisant le for + l'équivalent du f-string(version javascript) , ça affiche la table de multiplication de 5*/

let deux = [2]
for(let i=1; i <=10; i++)
{
    let result = i * deux;

    console.log(`${deux} * ${i} = ${result}`);
}

/* en utilisant le for + l'équivalent du f-string(version javascript) , ça affiche la table de multiplication de 2*/