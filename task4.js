let data = {
    id: 1,
    name: "leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874"
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
}

console.log("data belum diubah")
console.log("\n")
console.log(data)
console.log("\n")

data = {...data, name: "Prayogo Santoso", email: "prayogo.santoso681@gmail.com", hobby: "playing runettera" }
console.log("data sudah diubah")
console.log("\n")
console.log(data)
console.log("\n")

let { address: { street, city } } = data
console.log("mengambil data street dan city")
console.log(street)
console.log(city)