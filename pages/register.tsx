import Page from "../components/page"
import {
    Card,
    Button,
    Col,
    Row,
    Form
} from "react-bootstrap"
import { QuestionCircle } from "react-bootstrap-icons"

export default function Login() {
    return (
        <Page className="d-md-flex justify-content-center">
            <Col md={{ span: 8 }}>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <h5>Register</h5>
                        </Card.Title>
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column md="4">
                                    Full Name
                                </Form.Label>
                                <Col span="4">
                                    <Form.Control placeholder="First Name" />
                                </Col>                                                                            
                                <Col span="4">
                                    <Form.Control placeholder="Last Name" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column md="4" className="d-flex align-items-center">
                                    School Email
                                    <QuestionCircle className="ms-auto" />
                                </Form.Label>
                                <Col md="8">
                                    <Form.Control type="email" placeholder="id@school.edu" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column md="4">
                                    Personal Email
                                </Form.Label>
                                <Col md="8">
                                    <Form.Control type="email" placeholder="email@example.com" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column md="4" className="d-flex align-items-center">
                                    Proof of Academic Status
                                    <QuestionCircle className="ms-auto" />
                                </Form.Label>
                                <Col md="8">
                                    <Form.Control type="file" />
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
    )
}