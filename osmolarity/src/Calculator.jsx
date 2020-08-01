import React, { useState } from 'react';
import Item from './Item';
import styled, { css } from 'styled-components'

export const MG_PER_ML_NAME = "mg per ml"
export const MSOM_PER_ML_NAME = "msoms / ml"
export const NUM_CCs_NAME = "#cc's"
export const MSOM_NAME = "msom"
export const PRICE_PER_ML_NAME = "price per ml"
export const TOTAL_COST_NAME = "Total Cost"

const header_data = {
    name: "NAME",
    amount: "AMOUNT",
    mg_per_ml: MG_PER_ML_NAME,
    msom_per_ml : MSOM_PER_ML_NAME,
    num_ccs : NUM_CCs_NAME,
    msom : MSOM_NAME,
    price_per_ml : PRICE_PER_ML_NAME,
    total_cost : TOTAL_COST_NAME
}

const Container = styled.div`
    /* text-align: center; */
    /* height: 100vh; */
`

const Table = styled.div`
    /* text-align: center; */
    width: 100%;
    height: 100%;
    display: block;
    /* align-items: stretch; */
    /* align-content: stretch;
    justify-content: center; */
`
const Total = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    /* border: 1px solid grey; */
    justify-content: center;
`

const Divider = styled.br`
    height: 10px;
    width: 100%;
    background: black;
    border: 2px solid black;
        display: flex;
    flex-direction: row;
`

function Calculator() {
    //     name: "Ascorbic Acid",
    //     amount: 0,
    //     MG_PER_ML: 500,
    //     MSOM_PER_ML : 6.05,
    //     NUM_CCs : 0,
    //     MSOM : 0,
    //     PRICE_PER_ML : .44,
    //     TOTAL_COST : 0
    const [calc_total_msoms, setCalc_total_msoms] = useState(0);
    const [calc_total_ccs, setCalc_total_ccs] = useState(0);
    const [calc_total_cost, setCalc_total_cost] = useState(0);
    const [calc_osmolarity, setCalc_osmolarity] = useState(0);


    let chemicals = [
        {
            name: "Ascorbic Acid",
            amount: 0,
            mg_per_ml: 500,
            msom_per_ml : 6.05,
            num_ccs : 0,
            msom : 0,
            price_per_ml : .44,
            total_cost : 0
        },
        {
            name: "Magnesium Chloride",
            amount: 0,
            mg_per_ml: 200,
            msom_per_ml : 2.95,
            num_ccs : 0,
            msom : 0,
            price_per_ml : 1.63,
            total_cost : 0
        },
        {
            name: "Calcium Chloride",
            amount: 0,
            mg_per_ml: 100,
            msom_per_ml : 2.04,
            num_ccs : 0,
            msom : 0,
            price_per_ml : 1.63,
            total_cost : 0
        },
        {
            name: "B-complex",
            amount: 0,
            mg_per_ml: 100,
            msom_per_ml : 2.04,
            num_ccs : 0,
            msom : 0,
            price_per_ml : 1.63,
            total_cost : 0
        },
        {
            name: "B6",
            amount: 0,
            mg_per_ml: 100,
            msom_per_ml : 1.6,
            num_ccs : 0,
            msom : 0,
            price_per_ml : 1.63,
            total_cost : 0
        },
        {
            name: "B5",
            amount: 0,
            mg_per_ml: 250,
            msom_per_ml : 1.36,
            num_ccs : 0,
            msom : 0,
            price_per_ml : 1.63,
            total_cost : 0
        },
        {
            name: "B12",
            amount: 0,
            mg_per_ml: 5,
            msom_per_ml : 2,
            num_ccs : 0,
            msom : 0,
            price_per_ml : 1.63,
            total_cost : 0
        },
        {
            name: "Taurine",
            amount: 0,
            mg_per_ml: 50,
            msom_per_ml : 0.95,
            num_ccs : 0,
            msom : 0,
            price_per_ml : 1.63,
            total_cost : 0
        },
        {
            name: "Zinc Chloride",
            amount: 0,
            mg_per_ml: 10,
            msom_per_ml : 0.21,
            num_ccs : 0,
            msom : 0,
            price_per_ml : 1.63,
            total_cost : 0
        },
        {
            name: "Selenium",
            amount: 0,
            mg_per_ml: 0.2,
            msom_per_ml : 0.1,
            num_ccs : 0,
            msom : 0,
            price_per_ml : 1.63,
            total_cost : 0
        },
        {
            name: "Alpha Lipoic Acid",
            amount: 0,
            mg_per_ml: 25,
            msom_per_ml : 0.12,
            num_ccs : 0,
            msom : 0,
            price_per_ml : 1.63,
            total_cost : 0
        },
        {
            name: "L-arginine",
            amount: 0,
            mg_per_ml: 200,
            msom_per_ml : 3.02,
            num_ccs : 0,
            msom : 0,
            price_per_ml : 1.63,
            total_cost : 0
        },
        {
            name: "L-carnitine",
            amount: 0,
            mg_per_ml: 500,
            msom_per_ml : 10.05,
            num_ccs : 0,
            msom : 0,
            price_per_ml : 1.63,
            total_cost : 0
        },
        {
            name: "Amino blend",
            amount: 0,
            mg_per_ml: "Glutamine 30 m/Ornithine 50 mg/Arginine 100 mg/lysine 50 mg/Citrulline 50 mg/Levocarnitine 100 mg",
            msom_per_ml : 4.4,
            num_ccs : 0,
            msom : 0,
            price_per_ml : 1.63,
            total_cost : 0
        },
        {
            name: "Biotin",
            amount: 0,
            mg_per_ml: 0.5,
            msom_per_ml : 0.011,
            num_ccs : 0,
            msom : 0,
            price_per_ml : 2.50,
            total_cost : 0
        }
    ]



    function update_and_calculate(new_chemical) {
        let additives = 0
        let total_msoms = 0
        let total_cost = 0.0
        let osmolarity = 0

        for (let i = 0; i < chemicals.length; i++) {

            if (chemicals[i].name === new_chemical.name){
                chemicals[i] = new_chemical
            }

            const chem = chemicals[i]

            chem.msom = chem.msom_per_ml * chem.num_ccs
            chem.amount = chem.mg_per_ml * chem.num_ccs
            chem.total_cost = chem.price_per_ml * chem.num_ccs

            if (chem.num_ccs != 0) console.log(chem.num_ccs)
            additives += chem.num_ccs
            total_msoms += chem.msom
            total_cost += chem.total_cost
        }

        osmolarity = (total_msoms / additives) * 1000


        setCalc_osmolarity(osmolarity)
        setCalc_total_msoms(total_msoms)
        setCalc_total_ccs(additives)
        setCalc_total_cost(total_cost)
    }

    console.log(calc_osmolarity)
    console.log(calc_total_ccs)
    return (
        <Container className="Calculator">
            <Table className="Table">
                <Item header data={header_data} />
                {chemicals.map(item => <Item data={item} update={update_and_calculate}/>)}
            </Table>
            <Divider className="Divider"/>
            {/* <Total className="Total"/> */}
            <Total className="Total">  <span> Total Additives : </span> <span>{calc_total_ccs}</span></Total>
            <Total className="Total">  <span> Total MSOMs : </span> <span>{calc_total_msoms}</span></Total>
            <Total primary className="Total"> <span> Osmolarity : </span> <span>{calc_osmolarity.toFixed(2)}</span></Total>
        </Container>
    );
}

export default Calculator;
