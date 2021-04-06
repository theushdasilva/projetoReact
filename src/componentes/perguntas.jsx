import React from "react";

export default function perguntas(){
    return(
        <>
        <div className="container">
            <div className="box-g">
                <h3>Titulo 3</h3>
                <form action="#">
                    <div>
                        <label>Pergunta 1</label>
                        <div>
                            <input type="text" name="" id="" placeholder="Digite a resposta"/>
                        </div>                        
                    </div>
                    <div>
                        <label>Pergunta 2</label>
                        <div>
                            <input type="text" name="" id="" placeholder="Digite a resposta"/>
                        </div>                        
                    </div>
                    <div>
                        <label>Pergunta 3</label>
                        <div>
                            <select id="tipo" name="tipo">
                                <option value="Selecione">Selecione</option>
                                <option value="Selecione">Selecione</option>
                                <option value="Selecione">Selecione</option>
                                <option value="Selecione">Selecione</option>
                                <option value="Selecione">Selecione</option>
                                <option value="Selecione">Selecione</option>
                            </select>
                        </div>                        
                    </div>
                    <button className="btn"></button>
                </form>
            </div>
        </div>
        </>
    );
}