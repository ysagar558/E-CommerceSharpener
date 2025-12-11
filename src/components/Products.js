import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CartContext from "../cart-context/CartContext";
import CartIcon from "./CartIcon";

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
    const cartCtx=useContext(CartContext);
    const addToCart=(item)=>{
        cartCtx.addItem(item);
    }


    return (
        <>
        <CartIcon/>
        <Container className="mt-4">
            <Row className="g-4">
                {productsArr.map((item) => (
                    <Col key={item.title} xs={12} md={6}>
                        <Card className="h-100 text-center shadow-sm">
                            <Card.Img
                                variant="top"
                                src={item.imageUrl}
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>₹{item.price}</Card.Text>
                                <Button variant="dark" onClick={()=>addToCart(item)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        </>
    );
};

export default Products;