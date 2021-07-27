import React from "react";
const Card= (props)=>{
    const {id,name,email}=props;
    return(
        //dib= display in block, br3 = border radius, pa= padding, ma= margin, grow= for animation, bw= border width, tc= text center
        <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
            <img src= {`https://robohash.org/${id}?size=200x200`} alt="robot" />
            <div>
                <h4>{name}</h4>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;