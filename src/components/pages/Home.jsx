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
                <GridLeft >
                    <h2 className="text-2xl font-bold text-gray-700"> About the Journal </h2>
                    <p className="text-justify mt-2">
                        The Journal of Financial Markets and Governance focuses on facilitating the exchange of scholarly knowledge between academics, industry stakeholders and the regulators across the world in the fields of finance, accounting and governance studies.

                        The journal welcomes original research articles, reviews, and industry insights related to finance and investment, governance, financial institutions, money and capital markets, and the interlinks between financial markets and the economy at the country, regional, and world level.

                        JFMG is officially published and supported by the Bangladesh Institute of Capital Market – Bangladesh’s only state-run specialized institute for offering academic degree programs, training and research in areas related to financial markets.
                    </p>

                    <div className="w-full boder border-b-2 border-gray-200 mt-10 mb-10"></div>

                    <div className="flex flex-row gap-3">
                        <div className="flex featured-left">
                            {/*<img src={FeaturedImg}  alt="img" className="w-full" />*/}
                        </div>
                        <div className="featured-left">
                            <p>
                                <Link to="/" className="text-[#014a7f] hover:underline font-medium"> Call for Papers: Role of Financial
                                    Markets for Economic Development
                                </Link>
                            </p>
                            <p> Issue 1 Volume 1 </p>
                            <p> Manuscript submission deadline: 28 February 2021</p>
                            <p>
                                <Link to="/" className="text-[#014a7f] hover:underline font-medium">
                                    Click here for submission
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className="w-full boder border-b-2 border-gray-200 mt-10 mb-10"></div>
                </GridLeft>

                <GridRight />

            </GridMain>
        </ContainerContent>
    );
}