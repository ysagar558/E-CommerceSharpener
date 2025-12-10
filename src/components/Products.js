import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const productsArr = [
    {
        title: "Colors",
        price: 100,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
        title: "Black and white Colors",
        price: 50,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
        title: "Yellow and Black Colors",
        price: 70,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
        title: "Blue Color",
        price: 100,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
];

const Products = () => {
    return (
        <Container className="mt-4">
            <Row className="g-4">
                {productsArr.map((item) => (
                    <Col key={item.title} xs={12} md={6}>
                        <Card className="h-100 text-center shadow-sm">
                            <img
                                variant="top"
                                src={item.imageUrl}
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>₹{item.price}</Card.Text>
                                <Button variant="dark">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Products;