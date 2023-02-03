console.log("test");

/* Frage
10x Ausgabe Hello World + Nummer */

let round

for ( round = 1; round <11; round = round + 1) {
    console.log(`Hallo World ${round}`); //bei <= 1-11 11x 
                                        // bei < 1-10 10x
}
console.log(`Hallo World ${round}`); //bei <= 12 1x
                                    // bei < 11 1x
                                    // bei 0 < 10   10 1x
