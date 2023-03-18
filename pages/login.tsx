import Page from "../components/page"
import {
    Card,
    Button,
    Col,
    Row,
    Form
} from "react-bootstrap"

export default function Login() {
    return (
        <Page className="d-md-flex justify-content-center">
            <Col md={{ span: 8 }}>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <h5>Log in</h5>
                        </Card.Title>
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column md="2">
                                    Email
                                </Form.Label>
                                <Col md="10">
                                    <Form.Control type="email" placeholder="id@school.edu" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column md="2">
                                    Password
                                </Form.Label>
                                <Col md="10">
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>

                            <Col md={{ offset: 2 }}>
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