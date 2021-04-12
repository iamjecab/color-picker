import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Heading = styled.h3`
    text-align: center;
    color: red;
    text-transform: capitalize;
`;

const Error = () => {
    return (
        <>
            <Container>
                <Heading>
                    Please enter correct color in hexadecimal format
                </Heading>
            </Container>
        </>
    );
};

export default Error;
