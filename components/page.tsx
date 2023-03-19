import Header from "./header";
import { Container } from "reactstrap";

export default function Page(props: any) {
    const {className, children} = props
  return (
    <>
      <Header />
      <Container className={`pt-4 border-start border-end page ${className ? className : ""}`}>{props.children}</Container>
    </>
  );
}
