// TypeScript infers -> const person: { name: string; age: number }

const gender: any = "Male"; // type any, removes all TypeScript magic.

const personOne = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"], // type string[], an array of strings.
  role: [1, "admin"], // type tuple -> role: [number, string]
  gender,
};

// by doing ADMIN = 5, the enum will start from number five.
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const personTwo = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN, // type Role which is an enum.
};

console.log(personTwo); // hover person to see type infering.

if (personTwo.role === Role.ADMIN) {
  console.log(`${personTwo.name} is admin`);
}

for (const hobby of personTwo.hobbies) {
  console.log(hobby); // hobby can access all string methods now.
}
