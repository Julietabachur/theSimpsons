// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import { server } from "./mocks/server";

beforeAll(() => {
  console.log("Iniciando servidor de msw");
  server.listen();
});

afterAll(() => {
  console.log("Apagando servidor de msw");
  server.close();
});

afterEach(() => server.resetHandlers());
