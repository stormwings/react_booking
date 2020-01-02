import { callbackHell, getDataFromApi } from "../async";

describe("Probando un Callback", () => {
  // testeando callbacks
  test("Callback", done => {
    function otherCallback(data) {
      expect(data).toBe("Hola Javascripters");
      done();
    }
    callbackHell(otherCallback);
  });
});

describe("Probando promesas", () => {
  // testeando axios
  test("Realizando una peticion a una api", done => {
    const api = "https://rickandmortyapi.com/api/character/";
    getDataFromApi(api).then(data => {
      expect(data.results.length).toBeGreaterThan(0);
      done();
    });
  });

  // testeando promesas
  test("Resuelve un hola!", () => {
    return expect(Promise.resolve("Hola")).resolves.toBe("Hola");
  });
  test("Resuelve con un error!", () => {
    return expect(Promise.reject("Error")).rejects.toBe("Error");
  });
});

describe("Testing using promises with async/await", () => {
  // testeando async await
  test("Calling an API", async done => {
    const { results } = await getDataFromApi(
      "https://rickandmortyapi.com/api/character/"
    );
    expect(results.length).toBeGreaterThan(0);

    const { name } = await getDataFromApi(
      "https://rickandmortyapi.com/api/character/1/"
    );
    expect(name).toEqual("Rick Sanchez");
    done();
  });
});

test("Realizando una peticion a una api con error", async () => {
  // testeando responses
  const apiError = "http://httpstat.us/500";
  const peticion = getDataFromApi(apiError);
  await expect(peticion).rejects.toEqual(
    Error("Request failed with status code 500")
  );
});

const reverseStringPromise = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("There is no string"));
    }
    resolve(
      str
        .split("")
        .reverse()
        .join("")
    );
  });
};

// Test promises
test("The promise should return a reversed word", () => {
  return reverseStringPromise("Platzi").then(str => {
    expect(str).toBe("iztalP");
  });
});

// Test async-await
test("The async-await block code should return a reversed word", async () => {
  const str = await reverseStringPromise("adidas");
  expect(str).toBe("sadida");
});
