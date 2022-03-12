import { Form } from 'react-bootstrap'
import './Splash.css'

function Splash() {
    return (
        <main class="splash-main">
            <h2 class="splash-header inset">InfoUnion!</h2>
            <div class="splash-prompt-container">
                <p class="splash-prompt">I am a/an</p>
                <div class="occupation select-container">
                    <Form.Select class="form-select">
                        <option>Occupation</option>
                        <option value="1">Engineer</option>
                        <option value="2">Teacher</option>
                        <option value="3">Sith</option>
                    </Form.Select>
                </div>
                <p class="splash-prompt">based in</p>
                <div class="location select-container">
                    <Form.Select class="form-select">
                        <option>Location</option>
                        <option value="1">California</option>
                        <option value="2">Idaho</option>
                        <option value="3">Coruscant</option>
                    </Form.Select>
                </div>
            </div>
            <div class="splash-prompt-container-2">
                <p class="splash-prompt">I want</p>
                <div class="info select-container">
                    <Form.Select class="form-select">
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