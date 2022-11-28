import { decode } from "html-entities";
import { useState } from "react";
import styled from "styled-components";

//setting card that holds a question-`` is styling from styled-components
const Card = props => {
    

    const sendData = number => {
     
        props.send(number)
    }
    const Question = styled.h4`
        text-align: center;
        font-size: 1.5em;
    `;
    const Body = styled.section`
        display: flex;
        flex-direction: column;
        width: 50%;
    `;
    const Holder = styled.section`
        display: grid;
        grid-template-column: 1fr 1fr;
    `;
    const Answer = styled.button`
        border-radius: 1rem;
        background-color: ${props.live?'white': 'black'};
        color: ${props.live?'black': 'white'};
    `;

    //returns trivia card
    
    return (
        <Body>
            <Question>{decode(props.question)}</Question>
            <Holder>
                <Answer disabled={!props.live} onClick={() => sendData(props.answers[0])}>{decode(props.answers[0])}</Answer>
                <Answer disabled={!props.live} onClick={() => sendData(props.answers[1])}>{decode(props.answers[1])}</Answer>
                <Answer disabled={!props.live} onClick={() => sendData(props.answers[2])}>{decode(props.answers[2])}</Answer>
                <Answer disabled={!props.live} onClick={() => sendData(props.answers[3])}>{decode(props.answers[3])}</Answer>
            </Holder>
        </Body>
    )
}


export default Card;