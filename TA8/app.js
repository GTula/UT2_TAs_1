function findTheOldest(people){
    let oldestPerson="";
    let oldest =0;
    let age = 0;
    for(let i = 0; i<people.length; i++){
        age = people[i].yearOfDeath - people[i].yearOfBirth;
        if(age > oldest){
            oldest = age;
            oldestPerson= people[i].name;
        }
    }
    console.log(oldestPerson);
    return oldestPerson;
}

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

findTheOldest(people);