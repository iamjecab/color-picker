import React, { useState } from "react";
import styled from "styled-components";
import Values from "values.js";

import GlobalStyles from "./Components/GlobalStyles";
import Error from "./Components/Error";
import Colors from "./Components/Color";

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px 0;
    width: 100%;
    align-items: center;
    flex-direction: column;
    font-size: 1rem;
    @media (min-width: 460px) {
        font-size: 1.2rem;
    }
    @media (min-width: 670px) {
        font-size: 1.6rem;
    }
    @media (min-width: 1100px) {
        font-size: 1.6rem;
    }
`;

const Heading = styled.h3`
    font-size: inherit;
`;

const Input = styled.input`
    font-size: inherit;
    outline: 1px solid #49a6e9;
    margin: 15px 0;
    max-width: 90%;
`;

const Btn = styled.button`
    padding: 4px 10px;
    font-size: inherit;
    background-color: #49a6e9;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
`;

function App() {
    const [error, setError] = useState(false);
    const [colorList, setColorList] = useState([]);
    const [colorInput, setColorInput] = useState("");

    const clickHandler = () => {
        try {
            let colors = new Values(colorInput).all(10);
            setColorList(colors);
        } catch (error) {
            setError(true);
            console.log(error);
        }
    };

    return (
        <>
            <GlobalStyles />
            <Container>
                <Heading>Color Generator</Heading>
                <Input
                    value={colorInput}
                    onChange={(e) => {
                        setColorInput(e.target.value);
                    }}
                    placeholder="enter color"
                />
                <Btn onClick={clickHandler}> Submit</Btn>
            </Container>
            {error ? <Error /> : null}
            <Colors colorList={colorList} />
        </>
    );
}

export default App;
