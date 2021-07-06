import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Header = () => {
    return (
        <div>
        <Jumbotron fluid>
            <Container fluid>
            <h1 className="display-3">Plan your next getaway!</h1>
            <p className="lead">
                Need a break from React Challenges? Check out what we found for you to do instead!
            </p>
            </Container>
        </Jumbotron>
        </div>
    );
};

export default Header;