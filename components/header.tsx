import React from "react";
import {
    Container,
    Navbar,
    Nav
} from "react-bootstrap";
import Link from "next/link"

export default function Header() {
    return (
        <>
            <div className="shadow-sm">
                <Container>
                    <Navbar expand="md">
                        <Navbar.Brand as={Link} href="/">momento</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-collapse" />
                        <Navbar.Collapse id="navbar-collapse">
                            <Nav className="d-block d-md-flex me-md-auto">
                                <Nav.Item>
                                    <Nav.Link as={Link} href="/">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} href="/about">About</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} href="/feedback">Feedback</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Nav className="d-block d-md-flex">
                                <Nav.Item>
                                    <Nav.Link as={Link} href="/login">Login</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} href="/register">Register</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>
        </>

    );
}
