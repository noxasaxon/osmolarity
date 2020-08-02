import React from 'react';
import styled, { css } from 'styled-components'

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    border: 1px solid grey;
    justify-content: space-around;
    
    /* background: ${props => props.index % 2 === 0 ? 'white' : 'lightyellow'}; */
    ${props => props.header && css`
        padding: 3px;
        font-weight: bold;
        border-bottom: 3px solid black;
        background-color: lightblue;
    `}
`

const Text_Column = styled.div`
    width: 20%;
    ${props => props.input_label && css`
        /* width: 30px; */
        width: 10%;
    `}
    ${props => props.header && css`
        font-weight: bold;
    `}
    ${props => props.ingredients_label && css`
        /* min-width: 105px; */
        width:30%;
    `}
`

const Input_Column = styled.input`
    width: 10%;
    /* width: 30px; */
`


function Item( {data, header, update, index} ) {
    console.log(index)
    console.log(index % 2 === 0)
    const new_value = (event) => {
        const chemical = data
        let new_ccs = parseFloat(event.target.value)

        chemical.num_ccs = new_ccs
        update(chemical)
    }

    if (header){
        return (
            <Row header className="Theader">
                <Text_Column header >{data.name}</Text_Column>
                <Text_Column header ingredients_label>{data.mg_per_ml}</Text_Column>
                <Text_Column header>{data.msoms_per_ml}</Text_Column>
                <Text_Column header input_label>{data.num_ccs}</Text_Column>
                <Text_Column header>{data.msom}</Text_Column>
                {/* <Text_Column header>{data.price_per_ml}</Text_Column>
                <Text_Column header>{data.total_cost}</Text_Column> */}
            </Row>
        )
    }

    return (
        <Row className="Trow">
            <Text_Column header>{data.name}</Text_Column>
            
            <Text_Column ingredients_label>{data.mg_per_ml}</Text_Column>
            <Text_Column>{data.msoms_per_ml}</Text_Column>
            <Input_Column type="number" pattern="[0-9]*" min="0" defaultValue='' onChange={new_value}/>
            <Text_Column>{data.msom}</Text_Column>
            {/* <Text_Column>{data.price_per_ml}</Text_Column> */}
            {/* <Text_Column>{data.total_cost}</Text_Column> */}
        </Row>
    );
}

export default Item;
