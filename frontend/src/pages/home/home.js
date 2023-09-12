// Link: https://reactrouter.com/en/main/components/link
import { Link } from "react-router-dom";

// Link: https://react-bootstrap.netlify.app/docs/layout/grid/#container
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import CSS file
import './home.css';

export default function Home() {
    return (
        <Container fluid>
            <Row>
                <Col sm={8} className="paragraph1">
                    This is the first paragraph.
                </Col>
                <Col sm={4} className="paragraph2">
                    This is the second paragraph.
                </Col>
            </Row>
            <Row>
                <Col className="link">
                    Here is the <Link to="/demopage">link</Link> to a surprise.
                </Col>
            </Row>
        </Container>
    )
}