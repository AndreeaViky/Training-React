import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './myprofile.css';

import Puppy from '../../assets/myprofile/puppy.jpg';
import Carusel1 from '../../assets/myprofile/carusel1.jpg';
import Carusel2 from '../../assets/myprofile/carusel2.jpg';
import Carusel3 from '../../assets/myprofile/carusel3.jpg';

import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';

import Table from 'react-bootstrap/Table';


export default function MyProfile() {
    return (
        <Container fluid>
            <p className="paragraph10">
                First paragraph
            </p>

            <Row>
                <Col sm={6} className="paragraph11">
                    <img src={Puppy} className="fix-img" alt="Puppy">
                    </img>
                </Col>
                <Col sm={6} className="paragraph11">
                    A puppy is a juvenile dog. All puppies display primary altriciality and healthy puppies grow quickly after birth. A puppy's coat color may change as the puppy grows older. Puppy refers specifically to young dogs, while pup may be used for other animals such as wolves, seals, giraffes, guinea pigs, rats or sharks.
                </Col>
            </Row>

            <Row className="paragraph12">
                Sectiunea 3
                <Carousel>
                    <CarouselItem>
                        <img src={Carusel1} className="fix-img" alt="Carusel1">
                        </img>
                    </CarouselItem>

                    <CarouselItem>
                        <img src={Carusel2} className="fix-img" alt="Carusel2">
                        </img>
                    </CarouselItem>

                    <CarouselItem>
                        <img src={Carusel3} className="fix-img" alt="Carusel3">
                        </img>
                    </CarouselItem>

                </Carousel>

            </Row>

            <Row className="paragraph12">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nr. Crt.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                        </tr>

                    </tbody>
                </Table>
            </Row>


        </Container>
    )
}