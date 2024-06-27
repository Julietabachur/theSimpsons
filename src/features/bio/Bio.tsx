import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
// import styles from "./styles.module.css";
import {
  BioContainer,
  BioDescripcion,
  BioImagen,
  BioNombre,
  ButtonStyled,
  ContenedorBotones,
} from "./styled";

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return (
      Object.keys(INFO_SIMPSONS) as Array<keyof typeof INFO_SIMPSONS>
    ).map((nombre: string) => (
      <ButtonStyled
        isActive={bioActiva.id === nombre}
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
      >
        {nombre}
      </ButtonStyled>
    ));
  };

  return (
    <BioContainer>
      <ContenedorBotones>{crearBotones()}</ContenedorBotones>
      <div>
        <div>
          <BioImagen src={bioActiva.image} alt={bioActiva.nombre} />
        </div>
        <div>
          <BioNombre>{bioActiva.nombre}</BioNombre>
          <BioDescripcion>{bioActiva.descripcion}</BioDescripcion>
        </div>
      </div>
    </BioContainer>
  );
};

export default Bio;
