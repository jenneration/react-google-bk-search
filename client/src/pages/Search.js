import React from "react";
import Hero from "../components/Hero";
import { Container, Row, Col } from "../components/Grid/grid";
import Input from "../components/Input";
import Button from "../components/Button";

function Search() {
    return (

        <div>
            <Hero>This is the hero</Hero>
            <Container>
                <Row>
                    <Col size="md-12">
                        <p>this is a column, in a row, in a container</p>
                        <form>
                            <Container>
                                <Row>
                                    <Col size="xs-9 sm-10">
                                        <Input />
                                    </Col>
                                    <Col size="xs-3 sm-2">
                                        <Button>Search</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Search;