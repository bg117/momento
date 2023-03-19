import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import Link from "next/link";
import Cookies from "js-cookie";
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "500",
  style: "italic",
});

export default function Header() {
  const username = Cookies.get("username");
  const hasUsername = !!username;
  const navLoggedOut = (
    <>
      <Nav.Item>
        <Nav.Link as={Link} href="/login" active>
          Login
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} href="/register" active>
          Register
        </Nav.Link>
      </Nav.Item>
    </>
  );

  return (
    <>
      <div className="shadow-sm bg-primary">
        <Container>
          <Navbar expand="md" variant="dark">
            <Navbar.Brand
              as={Link}
              href="/"
              className={`${ibmPlexMono.className}`}
            >
              momento
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-collapse" />
            <Navbar.Collapse id="navbar-collapse">
              <Nav className="d-block d-md-flex me-md-auto">
                <Nav.Item>
                  <Nav.Link as={Link} href="/" active>
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} href="/about" active>
                    About
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} href="/feedback" active>
                    Feedback
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Nav className="d-block d-md-flex">{navLoggedOut}</Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    </>
  );
}
