import React from "react";


export default function GridRight({children}){
    return (
        <div className="col-span-3 bg-yellow-400" >
            {children}
        </div>
    );
}