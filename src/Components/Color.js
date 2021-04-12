import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-wrap: wrap;
    @media (min-width: 460px) {
        flex-direction: row;
    }
`;

const Card = styled.div`
    background-color: #${(props) => props.color.hex};
    color: ${(props) => (props.type === "shade" ? "white" : "black")};
    height: 100px;
    padding-left: 20px;

    @media (min-width: 460px) {
        width: 50%;
    }
    @media (min-width: 670px) {
        width: 33.3%;
        height: 140px;
    }
    @media (min-width: 1100px) {
        width: 20%;
        height: 170px;
    }
`;

const Weight = styled.h4`
    margin: 10px 0;
`;

const Hex = styled.h4``;

const Colors = ({ colorList }) => {
    const [copyAlert, setCopyAlert] = useState(false);

    return (
        <>
            <Container>
                {colorList.map((color, index) => {
                    const { type, weight, hex } = color;
                    return (
                        <Card
                            key={index}
                            color={color}
                            type={type}
                            onClick={() => {
                                navigator.clipboard.writeText(`#${hex}`);
                                setCopyAlert(true);
                            }}
                        >
                            <Weight>{weight}%</Weight>
                            <Hex>#{hex}</Hex>
                        </Card>
                    );
                })}
            </Container>
        </>
    );
};

export default Colors;
