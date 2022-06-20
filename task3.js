const printSegitiga = 7;

if (typeof printSegitiga == 'number') {
    let segitiga = ""
        // for (let i = 0; i < printSegitiga + 1; i++) {
    for (let x = 1; x <= printSegitiga - 1; x++) {
        segitiga += x + " ";
    }
    segitiga = segitiga + "\n";
    // }
    console.log(segitiga);
} else {
    console.log("Data harus number")
}


// if (typeof printSegitiga == 'number') {
//     let segitiga = ""
//     for (let i = 0; i < printSegitiga + 1; i++) {
//         for (let x = 1; x <= printSegitiga - i; x++) {
//             segitiga += x + " ";
//         }
//         segitiga = segitiga + "\n";
//     }
//     console.log(segitiga);
// } else {
//     console.log("Data harus number")
// }