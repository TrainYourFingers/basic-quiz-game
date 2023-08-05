import React from "react"

function Card(props){

    let badgeText, symbol, personal

    if(props.data.value === 1){
        badgeText = "right"
        symbol = "done_all"
        personal = "green"
    }
    else{
        badgeText = "not right"
        symbol = "close"
        personal = "red"
    }
        

    return(
        <div className="w-full h-56 flex p-2 overflow-hidden">
            <div className="img h-full w-1/5 rounded-md">
                <img src={`../src/assets/${props.data.image}`} alt="image" className="h-full w-full rounded-md" />
            </div>
            <div className="brief p-4 w-4/5">
                <div className="header flex place-items-center font-sans">
                    <span className="material-symbols-outlined text-red-600">location_on</span>
                    <h1 className="font-bold text-sm px-2">{props.data.location}</h1>&bull;
                    <h1 className="italic underline text-slate-500 px-2 text-sm">{props.data.temperature}</h1>
                </div>
                <div className="name py-2">
                    <h1 className="font-extrabold text-2xl">{props.data.name}</h1>
                </div>
                <div className="description">
                    <p>{props.data.description}</p>
                </div>
                <div className="footer flex place-items-center">
                    <h1 className="font-thin py-2 text-sm">This is the <span className="font-bold">{badgeText}</span> season to visit.</h1>
                    <span id="symbolColor" style={{color: `${personal}`}} className="material-symbols-outlined px-2">{symbol}</span>
                </div>
            </div>
        </div>
    )
}

export default Card