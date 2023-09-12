// Import useState for Like System
import { useState } from "react";

// Link: https://reactrouter.com/en/main/components/link
import { Link } from "react-router-dom";

// Link: https://react-bootstrap.netlify.app/docs/layout/grid/#container
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import images from "assets" folder
import Piggy1 from '../../assets/piggy/Piggy1.jpg';
import Piggy2 from '../../assets/piggy/Piggy2.jpg';
import Piggy3 from '../../assets/piggy/Piggy3.jpg';

import SimpleHeart from '../../assets/heart/SimpleHeart.png';
import LikeHeart from '../../assets/heart/LikeHeart.png';

// Import CSS file
import './demoPage.css';

export default function DemoPage() {
    const [likes, setLikes] = useState(0);
    const [likesArray, setLikesArray] = useState([0, 0, 0]);

    const handleLikeClick = (index) => {
        setLikesArray((prevLikes) => {
            const newLikes = [...prevLikes];
            if(newLikes[index] === 0){
                newLikes[index] = 1;
                setLikes(likes + 1);
            }
            else{
                newLikes[index] = 0;
                setLikes(likes - 1);
            }
            return newLikes;
        });
    };

    return (
        <Container fluid>
            <Row>
                <h1 className="text-center">Piglets</h1>
                <h3 className="end">Likes: {likes}</h3>
            </Row>
            <Row className="text-center">
                {[Piggy1, Piggy2, Piggy3].map((piggyImg, index) => (
                    <Col sm={4} key={index}>
                        <img src={piggyImg} className="fix-img" alt="Piggy"></img>
                        <button className="button" onClick={() => handleLikeClick(index)}>
                            <img src={likesArray[index] === 0 ? SimpleHeart : LikeHeart} style={{ height: "50px" }} alt="Heart" />
                        </button>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col className="text-center">
                    Link to <Link to="/">home</Link> :(
                </Col>
            </Row>
        </Container>
    )
}