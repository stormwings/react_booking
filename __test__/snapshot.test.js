import { getCharacter } from "../snapshot";
import rick from "../rick.json";

describe("Es hora de las intantaneas", () => {
  // la primera vez se va a generar un folder con los snapshot
  // las siguientes solo será una comprobación
  test("Snapshot", () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });

  test("Tenemos una excepsion dentro del codigo", () => {
    const user = {
      createAt: new Date(),
      id: Math.floor(Math.random() * 20),
      name: "Oscar Barajas Tavares"
    };
    expect(user).toMatchSnapshot({
      id: expect.any(Number),
      createAt: expect.any(Date)
    });
  });
});
