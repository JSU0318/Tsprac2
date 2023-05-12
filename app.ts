const person: {
  name: string;
  age: number;
  hobby: string[];
  role: [number, string];
} = {
  name: "Maximilian",
  age: 30,
  hobby: ["Sport", "Cooking"],
  role: [2, "author"],
};
// person.role.push("admin");
// person.role[1] = 10;
person.role = [0, "stri"];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobbies of person.hobby) {
  console.log(hobbies.toUpperCase());
}
