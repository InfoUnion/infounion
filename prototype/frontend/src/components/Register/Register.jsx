import { Form, Button } from "react-bootstrap";
import './Register.css'

function Register() {
    return (
        <>
            <main>
                <div className="login-container">
                    <div className="login-form">
                        <Form className="form-container">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button className="register-button" variant="" type="submit">
                                Register
                            </Button>
                        </Form>
                    </div>
                </div>
            </main>

        </>
    );
}

export default Register