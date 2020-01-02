import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { arrayFruits, arrayColors } from "../arrays";

test("renders learn react link", () => {
  const rendered = render(<App />);
  console.log(rendered);
});

describe("Comprobaremos que existe un elemento", () => {
  test("¿Tiene una banana?", () => {
    expect(arrayFruits()).toContain("banana");
  });
  test("No contiene un Platano", () => {
    expect(arrayFruits()).not.toContain("platano");
  });
  test("Comprobar el tamaño de un arreglo", () => {
    expect(arrayFruits()).toHaveLength(6);
  });
  test("Comprabaremos que existe un color", () => {
    expect(arrayColors()).toContain("azul");
  });
});
