import React, { useState } from "react";
import Hero from "../components/Hero";
import { Container, Row, Col } from "../components/Grid/grid";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../utils/API";

function Search() {
    const [searchValue, setSearchValue] = useState("")

    const handleInputChange = e => {
        const { value } = e.target;
        setSearchValue(value);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        API.getbooks(searchValue)
            .then(data => console.log(data))
            .catch(error => alert(error));
    };






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
                                        <Input 
                                        onChange={handleInputChange}/>
                                    </Col>
                                    <Col size="xs-3 sm-2">
                                        <Button onClick={handleFormSubmit}>Search</Button>
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