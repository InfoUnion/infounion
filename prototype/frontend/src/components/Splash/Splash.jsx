import { Form } from 'react-bootstrap'
import './Splash.css'

function Splash() {
    return (
        <main className="splash-main">
            <h2 className="splash-header inset">InfoUnion!</h2>
            <div className="splash-prompt-container">
                <p className="splash-prompt">I am a/an</p>
                <div className="occupation select-container">
                    <Form.Select className="form-select">
                        <option>Occupation</option>
                        <option value="1">Engineer</option>
                        <option value="2">Teacher</option>
                        <option value="3">Sith</option>
                    </Form.Select>
                </div>
                <p className="splash-prompt">based in</p>
                <div className="location select-container">
                    <Form.Select className="form-select">
                        <option>Location</option>
                        <option value="1">California</option>
                        <option value="2">Idaho</option>
                        <option value="3">Coruscant</option>
                    </Form.Select>
                </div>
            </div>
            <div className="splash-prompt-container-2">
                <p className="splash-prompt">I want</p>
                <div className="info select-container">
                    <Form.Select className="form-select">
                        <option>Information</option>
                        <option value="1">Unions</option>
                        <option value="2">Labor Laws</option>
                        <option value="3">Younglings</option>
                    </Form.Select>
                </div>
            </div>
        </main>

    );
}

export default Splash;