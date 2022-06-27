import React from "react";
import { Link } from "react-router-dom";
import ContainerContent from "../../ContainerContent";
import GridLeft from "../../GridLeft";
import GridMain from "../../GridMain";
import GridRight from "../../GridRight";
// import FeaturedImg from "../../assets/img/CFP.png";



export default function AboutUs(){
    return (
        <ContainerContent>
            <GridMain className="bg-zinc-800">
                <GridLeft >
                    <h2 className="text-2xl font-bold text-gray-700"> About Us </h2>
                    <h1 className="text-3xl font-bold underline">
                        Hello world!
                    </h1>
                </GridLeft>

                <GridRight />

            </GridMain>
        </ContainerContent>
    );
}