// naturalSciencesMajor
// englishlanguage
// indonesianlanguage
// language
// mathematics  

const naturalSciencesMajor = 75
const englishlanguage = 80
const mathematics = 65
const indonesianlanguage = 80

const average = ((naturalSciencesMajor + englishlanguage + mathematics + indonesianlanguage) / 4)

// console.log(average)

if (average >= 90) {
    console.log(`Rata-rata = ${average}
Grade = A`)
} else if (average >= 80) {
    console.log(`Rata-rata = ${average}
Grade = B`)
} else if (average >= 70) {
    console.log(`Rata-rata = ${average}
Grade = C`)
} else if (average >= 60) {
    console.log(`Rata-rata = ${average}
Grade = D`)
} else {
    console.log(`Rata-rata = ${average}
Grade = E`)
}