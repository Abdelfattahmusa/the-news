import React from "react";

const NewSingle =({item})=> (
    <div className="card-space">
    <div className="col m6 col s12 col l4 ">
        <div className="card">
            <div className="card-image animate__animated  animate__slideInLeft">
<img src={item.urlToImage} alt={item.title}/>
<span className="card-title">{item.source.name}</span>
            </div>
            <div className="card-content animate__animated animate__zoomIn">
            <p>{item.title}</p>
            </div>
            <div className="card-action animate__animated animate__zoomIn">
                <a className="card-action" href={item.url} >Full artecel</a>
            </div>
        </div>
        </div>
        </div>
     
        

        
);
export default NewSingle;