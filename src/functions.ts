import { wakandaFunctionProps } from "./types";

export function wakandaFunction({
  firstName,
  lastName,
  age,
}: wakandaFunctionProps) {
  let message = "Welcome to Wakanda, ";

  if (firstName) {
    message += firstName;

    if (lastName) {
      message += " " + lastName;
    }

    if (age) {
      message += ", aged " + age;
    }

    message += "! Wakanda forever! 🙅🏾‍♂️🐾";
  } else {
    message = "Who goes there? You need a name to enter Wakanda!";
  }

  console.log(message);
}
