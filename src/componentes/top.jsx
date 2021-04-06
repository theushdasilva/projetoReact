import React from "react";

export default function topo(){
    return(
        <>
        <div className="container">
            <div className="box-group-full">
            <div className="box-p">                
                <div className="sub-box">
                    <img src="img_01.png" alt=""/>
                    <div>
                        <h3>Titulo 1</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>                 
                </div>
                <div className="box-btn">
                    <button>Botão para detalhes</button>
                </div>
            </div>
            <div className="box-p">                
                <div className="sub-box">
                    <img src="img_02.png" alt=""/>
                    <div>
                        <h3>Titulo 1</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>                 
                </div>
                <div className="box-btn">
                    <button>Botão para detalhes</button>
                </div>
            </div>          
            </div>
        </div>
        </>
    );
}