import React from 'react';
import logo from './logo.svg';
import { Item } from './Item';

function Calculator() {
    const items = {
        "Ascorbic Acid" : {
            amount: 0,
            "mg per ml": 500,
            "msoms / ml" : 6.05,
            "#cc's" : 0,
            "msom" : 0,
            "price per ml" : .44,
            "Total Cost" : 0
        },
        "Magnesium Chloride" : {
            amount: 0,
            "mg per ml": 200,
            "msoms / ml" : 2.95,
            "#cc's" : 0,
            "msom" : 0,
            "price per ml" : 1.63,
            "Total Cost" : 0
        },
        "Calcium Chloride" : {
            amount: 0,
            "mg per ml": 100,
            "msoms / ml" : 2.04,
            "#cc's" : 0,
            "msom" : 0,
            "price per ml" : 1.63,
            "Total Cost" : 0
        },
        "B-complex" : {
            amount: 0,
            "mg per ml": 100,
            "msoms / ml" : 2.04,
            "#cc's" : 0,
            "msom" : 0,
            "price per ml" : 1.63,
            "Total Cost" : 0
        },
        "B6" : {
            amount: 0,
            "mg per ml": 100,
            "msoms / ml" : 1.6,
            "#cc's" : 0,
            "msom" : 0,
            "price per ml" : 1.63,
            "Total Cost" : 0
        },
        "B5" : {
            amount: 0,
            "mg per ml": 250,
            "msoms / ml" : 1.36,
            "#cc's" : 0,
            "msom" : 0,
            "price per ml" : 1.63,
            "Total Cost" : 0
        },
        "B12" : {
            amount: 0,
            "mg per ml": 5,
            "msoms / ml" : 2,
            "#cc's" : 0,
            "msom" : 0,
            "price per ml" : 1.63,
            "Total Cost" : 0
        },
        "Taurine" : {
            amount: 0,
            "mg per ml": 50,
            "msoms / ml" : 0.95,
            "#cc's" : 0,
            "msom" : 0,
            "price per ml" : 1.63,
            "Total Cost" : 0
        },
        "Zinc Chloride" : {
            amount: 0,
            "mg per ml": 10,
            "msoms / ml" : 0.21,
            "#cc's" : 0,
            "msom" : 0,
            "price per ml" : 1.63,
            "Total Cost" : 0
        },
        "Selenium" : {
            amount: 0,
            "mg per ml": 0.2,
            "msoms / ml" : 0.1,
            "#cc's" : 0,
            "msom" : 0,
            "price per ml" : 1.63,
            "Total Cost" : 0
        },
        "Alpha Lipoic Acid" : {
            amount: 0,
            "mg per ml": 25,
            "msoms / ml" : 0.12,
            "#cc's" : 0,
            "msom" : 0,
            "price per ml" : 1.63,
            "Total Cost" : 0
        },
        "L-arginine" : {
            amount: 0,
            "mg per ml": 200,
            "msoms / ml" : 3.02,
            "#cc's" : 0,
            "msom" : 0,
            "price per ml" : 1.63,
            "Total Cost" : 0
        },
        "L-carnitine" : {
            amount: 0,
            "mg per ml": 500,
            "msoms / ml" : 10.05,
            "#cc's" : 0,
            "msom" : 0,
            "price per ml" : 1.63,
            "Total Cost" : 0
        },
        "Amino blend" : {
            amount: 0,
            "mg per ml": "Glutamine 30 m/Ornithine 50 mg/Arginine 100 mg/lysine 50 mg/Citrulline 50 mg/Levocarnitine 100 mg",
            "msoms / ml" : 4.4,
            "#cc's" : 0,
            "msom" : 0,
            "price per ml" : 1.63,
            "Total Cost" : 0
        },
        "Biotin" : {
            amount: 0,
            "mg per ml": 0.5,
            "msoms / ml" : 0.011,
            "#cc's" : 0,
            "msom" : 0,
            "price per ml" : 2.50,
            "Total Cost" : 0
        }
    }

    return (
        <div className="Calculator">
            <Item></Item>
        </div>
    );
}

export default Calculator;
