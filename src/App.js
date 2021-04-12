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
`;

const Heading = styled.h3`
    font-size: 1.5rem;
`;

const Input = styled.input`
    font-size: 1rem;
    outline: 1px solid #49a6e9;
    margin: 10px 0;
`;

const Btn = styled.button`
    padding: 4px 10px;
    font-size: 1rem;
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
