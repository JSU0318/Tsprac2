enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobby: string[];
  role: 4;
} = {
  name: "Maximilian",
  age: 30,
  hobby: ["Sport", "Cooking"],
  role: ADMIN,
  //   role: [2, "author"],
};
// person.role.push("admin");
// person.role[1] = 10;

// person.role = [0, "stri"];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobbies of person.hobby) {
  console.log(hobbies.toUpperCase());
}
