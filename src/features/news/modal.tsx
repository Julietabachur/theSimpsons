import { SuscribeImage, CloseButton as Close } from "../../assets";
import { INoticiasNormalizadas } from "./Noticias";
import {
  CloseButton,
  TarjetaModal,
  ContenedorModal,
  DescripcionModal,
  ImagenModal,
  TituloModal,
  BotonSuscribir,
  CotenedorTexto,
} from "./styled";

/**
 * Componente Modal para mostrar el detalle de la noticia.
 * @param {Object} props - Propiedades del componente.
 * @param {INoticiasNormalizadas} props.modal - La noticia que se mostrará en el modal.
 * @param {() => void} props.closeModal - Función para cerrar el modal.
 * @returns {JSX.Element} El componente Modal.
 *
 * @description
 * Este componente fue creado para separar la lógica del modal del componente `Noticias`.
 *
 * Refactorizaciones:
 * - Creación del componente `Modal` para manejar la presentación y lógica del modal.
 *
 * Principios SOLID aplicados:
 * - **SRP (Single Responsibility Principle)**: El modal maneja solo la lógica y presentación del modal.
 * - **ISP (Interface Segregation Principle)**: Interfaz clara y específica para el componente modal.
 */
const Modal = ({
  modal,
  closeModal,
}: {
  modal: INoticiasNormalizadas;
  closeModal: () => void;
}) => {
  return (
    <ContenedorModal>
      <TarjetaModal>
        <CloseButton onClick={closeModal}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        {modal.esPremium ? (
          <>
            <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
            <CotenedorTexto>
              <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
              <DescripcionModal>
                Suscríbete a nuestro newsletter y recibe noticias de nuestros
                personajes favoritos.
              </DescripcionModal>
              <BotonSuscribir
                onClick={() =>
                  setTimeout(() => {
                    alert("Suscripto!");
                    closeModal();
                  }, 1000)
                }
              >
                Suscríbete
              </BotonSuscribir>
            </CotenedorTexto>
          </>
        ) : (
          <>
            <ImagenModal src={modal.imagen} alt="news-image" />
            <CotenedorTexto>
              <TituloModal>{modal.titulo}</TituloModal>
              <DescripcionModal>{modal.descripcion}</DescripcionModal>
            </CotenedorTexto>
          </>
        )}
      </TarjetaModal>
    </ContenedorModal>
  );
};

export default Modal;
