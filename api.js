let obj = {
    id : 1,
    name : "Puranjan Kumar Biswas",
    profession : "Teacher",
    country : "Bangladesh",
    religion : "Hindu",
    position : "Assistant Teacher",
    movie : "Titanic",
    distrct : "jhenidah",
    thana : "Kaligonj",
    posting : "Basudebpur",
    village : "Basudebpur",
    union : "Jamal",
    skill : ["js", "React", "wordpress"],

}


// Javascript object notation ==> JSON
// stringfied

// const stringfied = JSON.stringify(obj);
// console.log(stringfied);
// const parsed = JSON.parse(stringfied);
// console.log(parsed.name);
// console.log(parsed.id);

const obj2 = {...obj};
console.log(obj2);