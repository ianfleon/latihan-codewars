/*
    Mengecek string tidak berulang
    Apa => false (mengulang 'a')
    Aku => true ('tidak mengulang apapun')
*/

function isIsogram(iso) {

    // ubah ukuran
    iso = iso.toLowerCase();
    
    // explode
    let isox = iso.split('');

    for (let i = 0; i < isox.length; i++) {
        let point = 0;
        for (let j = i + 1; j < isox.length; j++) {
            if (isox[point] === isox[j]) {
                console.log("Ada");
                return false;
            } else {
                point = point + 1;
            }
        }
    }

    console.log("Aman");
    return true;

}

// isIsogram("ipaa");

// isIsogram("Dermatoglyphics");
// isIsogram("isogram");
isIsogram("moose");
// isIsogram("abca");
// isIsogram("isIsogram");
// isIsogram("");