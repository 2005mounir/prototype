let competences = ["C1", "C3", "C2", "C1", "C8", "C2", "C1"];
let codeChoisi = "C1";
let compteur = 0;
for (let code of competences) {
    if (code === codeChoisi) {
        compteur++;
    }
}

console.log(`Le code ${codeChoisi} apparait ${compteur} fois.`);


