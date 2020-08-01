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
const Container = styled.div`
    text-align: center;
`

const Row = styled.div`
    /* display: flex; */
    /* flex-direction: row; */
    /* flex-grow: 1; */
`

const Header = styled.th`
    /* display: flex; */
    /* flex-direction: row; */
    /* flex-grow: 1; */
`

const Input = styled.input``


// render(
//   <Container>
//     <Button>Normal Button</Button>
//     <Button primary>Primary Button</Button>
//   </Container>
// );

function Item({data, header}) {
    //     name: "Ascorbic Acid",
    //     amount: 0,
    //     MG_PER_ML: 500,
    //     MSOM_PER_ML : 6.05,
    //     NUM_CCs : 0,
    //     MSOM : 0,
    //     PRICE_PER_ML : .44,
    //     TOTAL_COST : 0

    if (header){
        return (
            <Header>
                <span>{data.name}</span>
                <span> {data.amount} </span>
                {/* <span>{data.mg_per_ml}</span> */}
                <span>{data.msoms_per_ml}</span>
                <span>{data.num_ccs}</span>
                <span>{data.msom}</span>
                <span>{data.price_per_ml}</span>
                <span>{data.total_cost}</span>
            </Header>
        )
    }

    return (
        <Row>
            <span>{data.name}</span>
            <Input value={data.amount}/>
            {/* <span>{data.mg_per_ml}</span> */}
            <span>{data.msoms_per_ml}</span>
            <span>{data.num_ccs}</span>
            <span>{data.msom}</span>
            <span>{data.price_per_ml}</span>
            <span>{data.total_cost}</span>
        </Row>
    );
}

export default Item;
