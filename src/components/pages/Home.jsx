import React from "react";
import { Link } from "react-router-dom";
import ContainerContent from "../../ContainerContent";
import GridLeft from "../../GridLeft";
import GridMain from "../../GridMain";
import GridRight from "../../GridRight";
// import FeaturedImg from "../../assets/img/CFP.png";



export default function Home(){
    return (
        <ContainerContent>
            <GridMain className="bg-zinc-800">
                <GridLeft/>
                <GridRight>

                        aaf<br/>
                        asdfads<br/>
                        f<br/>
                        as<br/>
                        fdadsfasd<br/>
                </GridRight>


            </GridMain>
        </ContainerContent>
    );
}