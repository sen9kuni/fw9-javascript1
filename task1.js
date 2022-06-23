const biodata = {
    name: "Yoga Pra",
    age: 23,
    hobbies: ["gamming", "read book", "watch movie"],
    isMaried: false,
    schoolList: [{
            yearIn: 2013,
            yearOut: 2016,
            major: "Natural Sciences Major"
        },
        {
            yearIn: 2016,
            yearOut: 2019,
            major: "Informatics Management"
        }
    ],
    skills: {
        HTML: "beginner",
        CSS: "beginner",
        JavaScript: "beginner"
    },
    interestInCoding: true
}

console.log(biodata)
console.log(typeof biodata.name)
console.log(typeof biodata.age)
console.log(typeof biodata.hobbies)
console.log(typeof biodata.isMaried)
console.log(typeof biodata.schoolList)
console.log(typeof biodata.skills)
console.log(typeof biodata.interestInCoding)