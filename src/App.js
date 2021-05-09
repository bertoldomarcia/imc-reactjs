import './App.css';
import React, { useState } from 'react';

function App(props) {
  let [weight, setWeight] = useState('');
  let [height, setHeight] = useState('');

  const handleClearClick = () => {
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    setWeight(undefined);
    setHeight(undefined);
    clearTable();
  }

  const handleCalculateClick = () => {
    if (height > 0 && weight > 0) {
      let total = weight / Number(height * height);
      showTable(total);
    } else {
      alert("Por favor, preencha a altura e o peso!");
    }
  }

  const showTable = (imc) => {
    clearTable();
    if (imc <= 18.5) {
      var element = document.getElementById('R1');
      element.style.backgroundColor = "#2ab6a9";
      element.style.color = "#f2f2f2";
    }
    else if (imc >= 18.6 && imc < 25) {
      var element = document.getElementById('R2');
      element.style.backgroundColor = "#2ab6a9";
      element.style.color = "#f2f2f2";
    }
    else if (imc >= 25 && imc < 30) {
      var element = document.getElementById('R3');
      element.style.backgroundColor = "#2ab6a9";
      element.style.color = "#f2f2f2";

    }
    else if (imc >= 30 && imc < 35) {
      var element = document.getElementById('R4');
      element.style.backgroundColor = "#2ab6a9";
      element.style.color = "#f2f2f2";
    }
    else if (imc >= 35 && imc < 40) {
      var element = document.getElementById('R5');
      element.style.backgroundColor = "#2ab6a9";
      element.style.color = "#f2f2f2";
    }
    else if (imc >= 40) {
      var element = document.getElementById('R6');
      element.style.backgroundColor = "#2ab6a9";
      element.style.color = "#f2f2f2";
    }
  }

  const clearTable = () => {
    var element = document.getElementById('R1');
    element.style.backgroundColor = "white";
    element.style.color = "rgba(0,0,0,0.87)";
    var element2 = document.getElementById('R2');
    element2.style.backgroundColor = "white";
    element2.style.color = "rgba(0,0,0,0.87)";
    var element3 = document.getElementById('R3');
    element3.style.backgroundColor = "white";
    element3.style.color = "rgba(0,0,0,0.87)";
    var element4 = document.getElementById('R4');
    element4.style.backgroundColor = "white";
    element4.style.color = "rgba(0,0,0,0.87)";
    var element5 = document.getElementById('R5');
    element5.style.backgroundColor = "white";
    element5.style.color = "rgba(0,0,0,0.87)";
    var element6 = document.getElementById('R6');
    element6.style.backgroundColor = "white";
    element6.style.color = "rgba(0,0,0,0.87)";
  }

  return (
    <div className="App">
      <div className="container">
        <h3>CALCULADORA DE IMC</h3>
        <div className="">
          <label className="" >Peso:</label>
          <div className="input-field col s6">
            <input id="weight" name="weight" onChange={event => setWeight(event.target.value)} placeholder="Ex.: 23" className="" type="number" />
          </div>
          <label className="" >Altura:</label>
          <div className="input-field col s6">
            <input id="height" name="height" onChange={event => setHeight(event.target.value)} placeholder="Ex.: 1,60" className="" type="number" />
          </div>
          <div className="container-margin">
            <button type="button" id="clean"  onClick={handleClearClick} className="btn waves-effect waves-light btn-margin-left">Limpar</button>
            <button type="button" id="calcular" onClick={handleCalculateClick} className="btn waves-effect waves-light btn-margin-left">Calcular</button>
          </div>
          <div className="container-margin">
            <label id="result" className="result"></label>
          </div>
        </div>
          <table className="table ">
            <tbody><tr>
              <td>IMC</td>
              <td>Resultado</td>
            </tr>
              <tr id="R1" >
                <td>Menos do que 18,5</td>
                <td>Abaixo do peso</td>
              </tr>
              <tr id="R2" >
                <td>Entre 18,5 e 24,9</td>
                <td>Peso normal</td>
              </tr>
              <tr id="R3" >
                <td>Entre 25 e 29,9 </td>
                <td>Sobrepeso</td>
              </tr>
              <tr id="R4" >
                <td>Entre 30 e 34,9</td>
                <td>Obesidade grau 1</td>
              </tr>
              <tr id="R5" >
                <td>Entre 35 e 39,9</td>
                <td>Obesidade grau 2</td>
              </tr>
              <tr id="R6" >
                <td>Mais do que 40</td>
                <td>Obesidade grau 3</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  );
}

export default App;
