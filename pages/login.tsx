import Page from "../components/page";
import { Card, Button, Col, Row, Form } from "react-bootstrap";
import React from "react";

export default function Login() {
  const [formValues, setFormValues] = React.useState({
    userId: "",
    password: "",
  });
  const [validated, setValidated] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const valid = form.checkValidity();

    if (!valid) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (valid) {
      // request to /api/login
      (async () => {
        const request = await fetch("/api/login", {
          method: "POST",
          body: JSON.stringify(formValues),
        });
        
        if (request.status === 200) {
          window.location.href = "/";
        }
      })();
    }
  };

  return (
    <Page className="d-md-flex justify-content-center">
      <Col md={{ span: 8 }}>
        <Card>
          <Card.Body>
            <Card.Title>
              <h5>Log in</h5>
            </Card.Title>
            <Form noValidate onSubmit={handleSubmit} validated={validated}>
              <Form.Group as={Row} className="mb-3" controlId="userId">
                <Form.Label
                  column
                  md="4"
                  className="d-flex align-items-center required"
                >
                  User ID
                </Form.Label>
                <Col md="8">
                  <Form.Control
                    placeholder="AAAAAA-abcdef012345"
                    required
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        userId: e.target.value,
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your user ID, or check the format of your user
                    ID.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="password">
                <Form.Label
                  column
                  md="4"
                  className="d-flex align-items-center required"
                >
                  Password
                </Form.Label>
                <Col md="8">
                  <Form.Control
                    type="password"
                    required
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        password: e.target.value,
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your password.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Col md={{ offset: 4 }}>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Page>
  );
}
