import { concatenation } from "./concatenation";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
  button.addEventListener("click", () => {
    concatenation(input.value, "hello!");
  });
}

let total: number = 100;
let name: string = "Oleg";
let isActive: boolean = false;
let empty: null = null;
name = "3";
let undf: undefined = undefined;

let age = 10;
