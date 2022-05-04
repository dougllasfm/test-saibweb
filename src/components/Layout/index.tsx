import { ReactNode } from "react";
import { Link } from "react-router-dom";
import backImg from "../../assets/back.png";
import { Container, Content } from "./styles";

interface LayoutProps {
  children: ReactNode;
  title: string;
}

export function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Container>
        <Link to="/">
          <img src={backImg} alt="Voltar página" />
        </Link>

        <h1>{title}</h1>
      </Container>
      <Content>{children}</Content>
    </>
  );
}

