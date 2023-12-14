const greetings: string = "hello world";
console.log(greetings);

var variable = "car";

if ("helo") {
  console.log("hello world");
}

greetings.forEach((element) => {});

// below shows the "strictNullChecks" in tsconfig.json
function nullOrValue(value?: string, another: string) {
  console.log(value.length);
}
