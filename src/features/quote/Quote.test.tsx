import { render, screen, fireEvent, waitFor } from "../../test-utils";
import Cita from "./Cita";

describe("Pruebas en Cita", () => {
  // ------- test 1 --------
  test("Debe verificar que la cita sea del personaje ingresado", async () => {
    render(<Cita />);

    const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i);
    fireEvent.change(input, { target: { value: "Marge" } });

    const boton = await screen.findByText(/Obtener Cita/i);
    fireEvent.click(boton);

    await waitFor(() => {
      expect(screen.getByText(/Marge Simpson/i)).toBeInTheDocument();
    });
  });

  // ------- test 2 --------
  test("Obtener cita aleatoria", async () => {
    render(<Cita />);

    const boton = await screen.findByText(/Obtener Cita/i);
    fireEvent.click(boton);
    await waitFor(() => {
      expect(screen.getByText(/Homer Simpson/i)).toBeInTheDocument();
    });

    screen.debug();
  });

  // ------- test 3 --------
  test("Debe pedir que se ingrese un nombre válido y no números", async () => {
    render(<Cita />);

    const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i);
    fireEvent.change(input, { target: { value: 222 } });

    const boton = await screen.findByText(/Obtener Cita/i);
    fireEvent.click(boton);

    await waitFor(() => {
      expect(
        screen.getByText(/Por favor ingrese un nombre válido/i)
      ).toBeInTheDocument();
    });

    screen.debug();
  });

  // ------- test 4 --------
  test("Debe limpiar el input y la cita al hacer click en 'Borrar'", async () => {
    render(<Cita />);

    const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i);
    fireEvent.change(input, { target: { value: "Marge" } });

    const obtenerCitaBtn = await screen.findByText(/Obtener Cita/i);
    fireEvent.click(obtenerCitaBtn);

    await waitFor(() => {
      expect(screen.getByText(/Marge Simpson/i)).toBeInTheDocument();
    });

    const borrarBtn = await screen.findByText(/Borrar/i);
    fireEvent.click(borrarBtn);

    expect((input as HTMLInputElement).value).toBe("");
    expect(screen.queryByText(/Marge Simpson/i)).not.toBeInTheDocument();
  });

  // ------- test 5 --------
  test("Debe manejar correctamente cuando no se encuentra cita para el personaje", async () => {
    render(<Cita />);

    const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i);
    fireEvent.change(input, { target: { value: "pepe" } });

    const boton = await screen.findByText(/Obtener Cita/i);
    fireEvent.click(boton);

    await waitFor(() => {
      expect(
        screen.getByText(/Por favor ingrese un nombre válido/i)
      ).toBeInTheDocument();
    });

    screen.debug();
  });

  // ------- test 6 --------
  test("Debe renderizar el componente Cita", async () => {
    render(<Cita />);
    const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i);
    const getQuoteBtn = await screen.findByText(/Obtener Cita/i);
    const deleteBtn = await screen.findByText(/Borrar/i);

    expect(input).toBeInTheDocument();
    expect(getQuoteBtn).toBeInTheDocument();
    expect(deleteBtn).toBeInTheDocument();
  });

  // ------- test 7 --------
  test("Debe retornar la cita correspondiente al personaje ingresado", async () => {
    render(<Cita />);

    const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i);
    fireEvent.change(input, { target: { value: "milhouse" } });

    const boton = await screen.findByText(/Obtener Cita/i);
    fireEvent.click(boton);

    const quote = await screen.findByText(/But my mom says I'm cool./i);

    await waitFor(() => {
      expect(quote).toBeInTheDocument();
    });

    screen.debug();
  });
});
