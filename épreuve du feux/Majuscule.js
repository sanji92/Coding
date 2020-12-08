var phrase = process.argv[2];
var phrModif;
var etape = 0;

for (i = 0; i <= phrase.length; i++) {
    etape++;
    if (i == 0) {
        phrModif = phrase[i].toLowerCase();
    }
    if (phrase.charAt(i) == ' ') {
        etape --;
    }
    if (i !== 0) {
        if (etape % 2 == "0") {
            phrModif += phrase.charAt(i).toUpperCase()
        }
        else { phrModif += phrase.charAt(i).toLowerCase() }
    }
}

console.log(phrModif)