import React from 'react';
import styled, { css } from 'styled-components'

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    ${props => props.primary && css`
        background: palevioletred;
        color: white;
    `}
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    border-bottom: 3px solid gray;
`

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    border: 1px solid grey;
    justify-content: space-between;
`


const Column_Field = styled.div`
    width: 45%;
    /* border: 1px solid blue; */
`

const Input = styled.input``

// render(
//   <Container>
//     <Button>Normal Button</Button>
//     <Button primary>Primary Button</Button>
//   </Container>
// );

function Item({data, header, update}) {
    //     name: "Ascorbic Acid",
    //     amount: 0,
    //     MG_PER_ML: 500,
    //     MSOM_PER_ML : 6.05,
    //     NUM_CCs : 0,
    //     MSOM : 0,
    //     PRICE_PER_ML : .44,
    //     TOTAL_COST : 0

    const new_value = (event) => {
        console.log(event)
        console.log(event.target.value)
        const chemical = data
        chemical.num_ccs = parseFloat(event.target.value)
        update(chemical)
    }

    if (header){
        return (
            <Header className="Theader">
                <Column_Field>{data.name}</Column_Field>
                <Column_Field>{data.num_ccs}</Column_Field>
                
                {/* <Column_Field> {data.amount} </Column_Field> */}
                {/* <Column_Field>{data.mg_per_ml}</Column_Field> */}
                {/* <Column_Field>{data.msoms_per_ml}</Column_Field> */}
                {/* <Column_Field>{data.msom}</Column_Field>
                <Column_Field>{data.price_per_ml}</Column_Field>
                <Column_Field>{data.total_cost}</Column_Field> */}
            </Header>
        )
    }

    return (
        <Row className="Trow">
            <Column_Field>{data.name}</Column_Field>
            <Column_Field><input type="number" pattern="[0-9]*" min="0" defaultValue='' onChange={new_value}/></Column_Field>
            {/* <Column_Field> {data.amount} </Column_Field> */}
            {/* <Column_Field>{data.mg_per_ml}</Column_Field> */}
            {/* <Column_Field>{data.msoms_per_ml}</Column_Field> */}
            {/* <Column_Field>{data.msom}</Column_Field> */}
            {/* <Column_Field>{data.price_per_ml}</Column_Field> */}
            {/* <Column_Field>{data.total_cost}</Column_Field> */}
        </Row>
    );
}

export default Item;
