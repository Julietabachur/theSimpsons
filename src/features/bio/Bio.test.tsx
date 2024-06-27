import { render, screen, fireEvent, waitFor } from "../../test-utils";
import Bio from "./Bio";

describe("Pruebas en Bio", () => {
  // ------------ test 1 -----------
  test("Debe renderizar el componente BIO", async () => {
    render(<Bio />);

    const bart = await screen.getByText(/Bart Simpson/i);
    expect(bart).toBeInTheDocument();
  });

  // ------------ test 2 -----------
  test("Debe verificar que este el boton de Lisa", async () => {
    render(<Bio />);

    const botones = screen.getAllByText(/LISA/i);

    const boton = botones.find((btn) => btn.getElementsByTagName("button"));

    expect(boton).toBeInTheDocument();
  });
});
