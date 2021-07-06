import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Footer = () => {
    return (
        <div>
        <Jumbotron fluid>
            <Container fluid>
            <p className="lead">
                Guardians of the Galaxy Project 2021
            </p>
            </Container>
        </Jumbotron>
        </div>
    );
};

export default Footer;