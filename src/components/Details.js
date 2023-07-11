import React from "react";
import Card from "./Card";

const Deatails = () => {
    const detailsList = {
        name: "Name",
        country: "Country",
        currency: "Currency",
        exchange: "Exchange",
        ipo: "Ipo Date",
        marketCapitalization: "Market Capitalization",
        finnhubIndustry: "Industry"
    };

    const convertMilliontoBillion = (number) => {
        return (number / 1000).toFixed(2)
    }
    <Card>
        <ul className="w-full h-full flex flex-col justify-between divide-y-1">
            {Object.keys(detailsList).map((item) => {
                return (
                    <li key={item} className="flex-1 flex justify-between items-center"> 
                        <span>{detailsList[item]}</span>
                    </li>
                )
            })}
        </ul>
    </Card>
}