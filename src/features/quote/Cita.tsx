import { useState } from "react";
import { shallowEqual } from "react-redux";
import {
  Boton,
  Input,
  AutorCita,
  ContenedorCita,
  TextoCita,
  ImgCita,
  BtnContainer,
  ContenedorAutorImg,
} from "./styled";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  obtenerImgDelPedido,
  obtenerCitaDelEstado,
  limpiar,
  obtenerEstadoDelPedido,
  obtenerCitaDeLaAPI,
} from "./citaSlice";
import { obtenerMensaje } from "./utils";

function Cita() {
  const [valorInput, setValorInput] = useState("");

  const { cita = "", personaje = "" } =
    useAppSelector(obtenerCitaDelEstado, shallowEqual) || {};

  const estadoPedido = useAppSelector(obtenerEstadoDelPedido);
  const imgPedido = useAppSelector(obtenerImgDelPedido);

  const dispatch = useAppDispatch();

  const onClickObtenerCita = () => dispatch(obtenerCitaDeLaAPI(valorInput));

  const onClickBorrar = () => {
    dispatch(limpiar());
    setValorInput("");
  };

  return (
    <ContenedorCita>
      <TextoCita>{obtenerMensaje(cita, estadoPedido)}</TextoCita>
      <ContenedorAutorImg>
        <AutorCita>{personaje}</AutorCita>
        {imgPedido && (
          <ImgCita src={imgPedido} alt={`Imagen de ${personaje}`} />
        )}
      </ContenedorAutorImg>
      <Input
        aria-label="Author Cita"
        value={valorInput}
        onChange={(e) => setValorInput(e.target.value)}
        placeholder="Ingresa el nombre del autor"
      />
      <BtnContainer>
        <Boton aria-label="Borrar" onClick={onClickBorrar} secondary={true}>
          Borrar
        </Boton>
        <Boton
          aria-label={valorInput ? "Obtener Cita" : "Obtener cita aleatoria"}
          onClick={onClickObtenerCita}
        >
          {valorInput ? "Obtener Cita" : "Obtener cita aleatoria"}
        </Boton>
      </BtnContainer>
    </ContenedorCita>
  );
}
export default Cita;
