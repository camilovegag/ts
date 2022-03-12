// tsc app.ts --watch | -w
// run tsc --init to create the tsconfig.json file.
// then, tsc -w will recompile all .ts files.

// exclude, include and files are json properties to modify if wanted.

const button = document.querySelector("button")! as HTMLButtonElement;

button.addEventListener("click", () => alert("click"));

function logger(data: string) {
  console.log(data);
  if (data === "hola") {
    return data;
  }
}

logger("hey");
