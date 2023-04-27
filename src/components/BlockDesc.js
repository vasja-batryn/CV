import React from "react"

export const BlockDesc = (props) => {
    return(
        <div className="block-desc flex justify-center content-center text-center flex-col ">
            <img src={props.image} alt="icon" className="block-desc_img mx-auto"/>
            <h3 className="simple-title mt-2">{props.title}</h3>
        </div>
    )
}