import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Login.css'

function Login() {
    return (
        <>
            <main>
                <div className="login-container">
                    <div className="login-form">
                        <Form className="form-container">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className="form-control-login" type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="form-control-login" type="password" placeholder="Password" />
                            </Form.Group>
                            <Button className="login-button" variant="" type="submit">
                                Login
                            </Button>
                            <Button className="register-button" variant="" type="submit">
                                <Link className="register-link" to="/register">Register</Link>
                            </Button>
                        </Form>
                    </div>
                </div>
            </main>

        </>
    );
}

export default Login