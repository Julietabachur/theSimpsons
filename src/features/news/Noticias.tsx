import { useEffect, useState } from "react";
import { obtenerNoticias } from "./fakeRest";
import { capitalizeTitle, calculateTime } from "./utils";
import {
  TarjetaNoticia,
  FechaTarjetaNoticia,
  DescripcionTarjetaNoticia,
  ImagenTarjetaNoticia,
  TituloTarjetaNoticia,
  ContenedorNoticias,
  ListaNoticias,
  TituloNoticias,
  BotonLectura,
} from "./styled";
import Modal from "./modal";

/**
 * Interface para las noticias normalizadas.
 * @typedef {Object} INoticiasNormalizadas
 * @property {number} id - El identificador de la noticia.
 * @property {string} titulo - El título de la noticia.
 * @property {string} descripcion - La descripción de la noticia.
 * @property {number|string} fecha - La fecha de la noticia.
 * @property {boolean} esPremium - Indica si la noticia es premium.
 * @property {string} imagen - La URL de la imagen de la noticia.
 * @property {string} [descripcionCorta] - La descripción corta de la noticia.
 */

export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: number | string;
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
}

/**
 * Componente principal de Noticias.
 * @returns {JSX.Element} El componente Noticias.
 *
 * @description
 * Este componente fue refactorizado para extraer lógica común en funciones utilitarias y componentes separados.
 *
 * Refactorizaciones:
 * - Extracción de funciones utilitarias (`capitalizeTitle` y `calculateTime`).
 * - Creación del componente `Modal`.
 *
 * Principios SOLID aplicados:
 * - **SRP (Single Responsibility Principle)**: Separación de responsabilidades en funciones utilitarias y el componente `Modal`.
 * - **OCP (Open/Closed Principle)**: El componente está abierto a la extensión pero cerrado a modificaciones directas.
 */

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  useEffect(() => {
    const obtenerInformacion = async () => {
      const respuesta = await obtenerNoticias();

      const data = respuesta.map((n) => {
        return {
          id: n.id,
          titulo: capitalizeTitle(n.titulo),
          descripcion: n.descripcion,
          fecha: calculateTime(n.fecha),
          esPremium: n.esPremium,
          imagen: n.imagen,
          descripcionCorta: n.descripcion.substring(0, 100),
        };
      });

      setNoticias(data);
    };

    obtenerInformacion();
  }, []);

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((n) => (
          <TarjetaNoticia>
            <ImagenTarjetaNoticia src={n.imagen} />
            <TituloTarjetaNoticia>{n.titulo}</TituloTarjetaNoticia>
            <FechaTarjetaNoticia>{n.fecha}</FechaTarjetaNoticia>
            <DescripcionTarjetaNoticia>
              {n.descripcionCorta}
            </DescripcionTarjetaNoticia>
            <BotonLectura onClick={() => setModal(n)}>Ver más</BotonLectura>
          </TarjetaNoticia>
        ))}
        {modal ? (
          <Modal modal={modal} closeModal={() => setModal(null)} />
        ) : null}
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
