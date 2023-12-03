const greetings: string = "hello world";
console.log(greetings);

var varaible = "car";

if ("helo") {
  console.log("hello world");
}

greetings.forEach((element) => {});

// below shows the "strictNullChecks" in tsconfig.json
function nullOrValue(value: string | null) {
  console.log(value.length);
}
