import React from "react"
import Card from "./card"
import info from "./data/info"

function Main(){
    const dataElements = info.map( data => 
        <Card 
            data = {data}
            key = {data.id}
        />
        )

    return(
        <div className="mainBody w-full max-w-3xl mx-auto bg-white">
            {dataElements}
        </div>
    )
}

export default Main