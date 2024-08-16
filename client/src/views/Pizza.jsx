import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';

const Pizza = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPizza = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
                if (!response.ok) {
                    throw new Error('Error al obtener los datos de la pizza');
                }
                const data = await response.json();
                setPizza(data);
                setError(null);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPizza();
    }, [id]);

    if (loading) {
        return (
            <Container className="mt-4 text-center">
                <Spinner animation="border">
                    <output aria-live="polite" className="visually-hidden">Cargando...</output>
                </Spinner>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="mt-4">
                <Alert variant="danger">{error}</Alert>
            </Container>
        );
    }

    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col md={8} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
                        <Card.Body>
                            <Card.Title>{pizza.name}</Card.Title>
                            <Card.Text>{pizza.desc}</Card.Text>
                            <Card.Text>
                                <strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}
                            </Card.Text>
                            <Card.Text>
                                <strong>Precio:</strong> {pizza.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Pizza;
