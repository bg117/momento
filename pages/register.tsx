import Page from "../components/page";
import {
  Card,
  Button,
  Col,
  Row,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { QuestionCircle } from "react-bootstrap-icons";
import React from "react";

export default function Login() {
  const [hasSchoolEmail, setHasSchoolEmail] = React.useState(true);
  const [validated, setValidated] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    name: "",
    dateOfBirth: "",
    schoolEmail: "",
    email: "",
    proofOfAcademicStatus: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log(formValues);
      (async () => {
        // POST formValues to /api/register
        const request = await fetch("/api/register", {
          method: "POST",
          body: JSON.stringify(formValues),
        });

        if (request.status === 200) {
          // Redirect to /login
          window.location.href = "/login";
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
              <h5>Register</h5>
            </Card.Title>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              method="POST"
              action="/api/register"
            >
              <Form.Group as={Row} className="mb-3" controlId="name">
                <Form.Label column md="4" className="required">
                  Full Name
                </Form.Label>
                <Col span="8">
                  <Form.Control placeholder="John Doe" required onChange={(e) => setFormValues({...formValues, name: e.target.value})} />
                  <Form.Control.Feedback type="invalid">
                    Please enter your name.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="dateOfBirth">
                <Form.Label column md="4" className="required">
                  Date of Birth
                </Form.Label>
                <Col md="4">
                  <Form.Control type="date" required onChange={(e) => setFormValues({...formValues, dateOfBirth: e.target.value})} />
                  <Form.Control.Feedback type="invalid">
                    Please enter your date of birth.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-1" controlId="schoolEmail">
                <Form.Label column md="4" className="d-flex align-items-center">
                  <span className="required-if-true">School Email</span>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip id="button-tooltip-2">
                        <p>
                          Entering a school email allows us to verify your
                          academic status more quickly. If you do not have a
                          school email (or it is not working), check &quot;I
                          don&apos;t have a school email&quot;.
                        </p>
                      </Tooltip>
                    }
                  >
                    <QuestionCircle className="ms-auto" size="16" />
                  </OverlayTrigger>
                </Form.Label>
                <Col md="8">
                  <Form.Control
                    type="email"
                    placeholder="id@school.edu"
                    disabled={!hasSchoolEmail}
                    required={hasSchoolEmail}
                    onChange={(e) => setFormValues({...formValues, schoolEmail: e.target.value})}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your school email.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="hasSchoolEmail">
                <Col md={{ offset: 4 }}>
                  <Form.Check
                    type="checkbox"
                    label="I don't have a school email"
                    checked={!hasSchoolEmail}
                    onChange={() => setHasSchoolEmail(!hasSchoolEmail)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="email">
                <Form.Label column md="4" className="required">
                  Personal Email
                </Form.Label>
                <Col md="8">
                  <Form.Control
                    type="email"
                    placeholder="email@example.com"
                    required
                    onChange={(e) => setFormValues({...formValues, email: e.target.value})}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your personal email.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="proofOfAcademicStatus"
              >
                <Form.Label column md="4" className="d-flex align-items-center">
                  <span className="required">Proof of Academic Status</span>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip id="button-tooltip-2">
                        <p>
                          A document that proves you are a student at your
                          school.
                        </p>
                        <p>
                          This can be a dated student ID, a letter of
                          acceptance, a report card, or a dated class schedule.
                        </p>
                      </Tooltip>
                    }
                  >
                    <QuestionCircle className="ms-auto" size="16" />
                  </OverlayTrigger>
                </Form.Label>
                <Col md="8">
                  <Form.Control type="file" required onChange={(e) => setFormValues({...formValues, proofOfAcademicStatus: e.target.value})} />
                  <Form.Control.Feedback type="invalid">
                    Please upload a proof of your academic status.
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
