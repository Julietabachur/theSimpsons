import styled, { css } from "styled-components";

interface InputProps {
  "aria-label": string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

interface BtnProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  "aria-label": string;
  secondary?: boolean;
  children: string;
}

interface img {
  src?: string;
  alt: string;
}

export const ContenedorCita = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  height: 70%;
  margin: 0.5rem 3rem;
  padding: 1rem;
  border: 1px solid darkgrey;
  box-shadow: 4px 4px 5px darkgrey;
  border-radius: 10px;
  background-color: whitesmoke;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const ContenedorAutorImg = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 449px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    width: 40%;
  }
`;

export const TextoCita = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin: 1rem auto;
  padding: 1rem;
  // min-height: 5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const AutorCita = styled.p`
  font-size: 1.7rem;
  font-weight: bold;
  color: #333;
  // margin: 1rem auto;
  padding: 0;
  // min-height: 3rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ImgCita = styled.img<img>`
  width: 100px;
  height: 150px;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const Input = styled.input<InputProps>`
  width: 60%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0 20px;
  font-size: 1.5rem;
  margin: 1rem auto;
  font-family: "Homer Simpson Revised", sans-serif;
`;

export const Boton = styled.button<BtnProps>`
  // width: 45%;
  min-width: 150px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid darkgray;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 0 10px;
  margin: 1rem 10px;
  font-family: "Homer Simpson Revised", sans-serif;
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.secondary
      ? css`
          background-color: #d1b07d;
          color: whitesmoke;
          text-shadow: 2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000,
            -2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000,
            -2px 0px 0 #000000, 0px -2px 0 #000000;
        `
      : css`
          background-color: #fdd835;
          color: whitesmoke;
          text-shadow: 2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000,
            -2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000,
            -2px 0px 0 #000000, 0px -2px 0 #000000;
        `}

  @media (max-width: 768px) {
    // width: 90%;
    min-width: 150px;
    font-size: 1rem;
  }
`;
