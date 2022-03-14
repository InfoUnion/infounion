import { Routes, Route, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import './Contact.css';

function Contact() {
    return (
        <>
            <main className="contact-container">
                <div class='space'></div>
                <h2>Contact Us!</h2>
                <p>
                    Email us at <a href="mailto:InfoUnion@calpoly.edu">InfoUnion@calpoly.edu</a>
                </p>
                <div className="contact-form">
                    <Form className="form-container">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className="form-control-contact" type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control className="form-control-contact contact-message" type="text" placeholder="Message" />
                        </Form.Group>
                        <Button className="submit-button" variant="" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </main>

        </>
    );
}

export default Contact;