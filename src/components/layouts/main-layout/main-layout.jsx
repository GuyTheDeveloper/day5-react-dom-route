import { Header } from "./header";
import { Container } from "../container";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};
