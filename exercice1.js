let num ;
function verifierPairOuImpair(nombre) {
if(num%2===0){
    console.log("this number is even ");
}else{
    console.log("this number is odd");
}
}
const nombre = 7;
const reslt = verifierPairOuImpair(nombre);
console.log(`${nombre} est un nombre ${reslt}.`);






//exercice2
//let num1,num2;
const max =(num1 ,num2)=>(num1 > num2) ? num1 : num2;

const resultat = max(10, 5);
console.log(resultat);






//exercice3
/*let factoriel =1;
const fact =(number)=> {
    if (nombre < 0) {
        return "Le factoriel n'est pas défini pour un  nombre négatif.";
    }

    // factoriel de 0 est 1
    if (nombre === 0) {
        return 1;
    }


    for (let i = 1; i <= nombre; i++) {
        factoriel *= i;
    }
    return factoriel;
}*/
//recursive
const factotoriel =(num)=>{
    if (nombre < 0) {
        return "Le factoriel n'est pas défini pour un  nombre négatif.";
    }

    // factoriel de 0 est 1
    if  (nombre === 0) {
        return 1;
    }
    else{
        return nombre*factotoriel(nombre-1);
    }

}
