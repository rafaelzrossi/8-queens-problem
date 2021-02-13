import { SSL_OP_EPHEMERAL_RSA } from 'constants';
import { stringify } from 'querystring';
import React, { Fragment } from 'react';
import { useState } from 'react';


import './App.css';
import queen from './images/chess_queen.svg'

function App() {
  const [queensLeft, setQueensLeft] = useState<number>(8);
  const [board, setBoard] = useState<number[][]>(
    [[0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0]]
  );





  function getCoordinates(id: string){
    //Encontra a posição do id no tabuleiro
    const n = Number(id);
    const row = Math.floor((n-1)/8);
    const col = (n-1)%8;
  
    return [row, col];
  }



  function getPositionValue(id: string){
    let [d1, d2] = getCoordinates(id);

    return board[d1][d2];
  }





  function rowAttack(row: number, col: number, entryValue: number){
    let b = board;

    /*
      Se a peça está sendo adicionada no tabuleiro, percorre a linha toda onde a peça está
      sendo posicionada, e nas posições que estiverem vazias, marca com 2.
    */
    if(entryValue === 1){
      for(let i = 0; i < 8; i++){
        if(b[row][i] === 0)
          b[row][i] = 2;
      }
    }

    /*
      Caso a peça está sendo removida, a linha toda é recebe 0.
    */
    else {
      for(let i = 0; i < 8; i++){
          b[row][i] = 0;
      }
    }

    setBoard(b);
  }

  function colAttack(row: number, col: number, entryValue: number){
    let b = board;

    /*
      Se a peça está sendo adicionada no tabuleiro, percorre a coluna toda onde a peça está
      sendo posicionada, e nas posições que estiverem vazias, marca com 2.
    */
    if(entryValue === 1){
      for(let i = 0; i < 8; i++){
        if(b[i][col] === 0)
          b[i][col] = 2;
      }
    }

    /*
      Caso a peça está sendo removida, a coluna toda é recebe 0.
    */
    else{
      for(let i = 0; i < 8; i++){
        if(i !== row)
          b[i][col] = 0;
      }
    }

    setBoard(b);
  }

  function diagAttack(row: number, col: number, entryValue: number){
    let b = board;

    let row_up_left = row - 1, col_up_left = col - 1;
    let row_up_right = row - 1, col_up_right = col + 1;
    
    let row_dw_left = row + 1, col_dw_left = col - 1;
    let row_dw_right = row + 1, col_dw_right = col + 1;


    // If entryValue = 0 -> Assign 0 Freeing the Space.
    // If entryValue = 1 -> Assign 2 Meaning that the position can be attacked by a queen.
    const assign = entryValue * 2;

    while(row_up_left >= 0 && col_up_left >= 0){
      b[row_up_left][col_up_left] = assign;

      row_up_left--;
      col_up_left--;
    }

    while(row_up_right >= 0 && col_up_right <= 7){
      b[row_up_right][col_up_right] = assign;

      row_up_right--;
      col_up_right++;
    }

    while(row_dw_left <= 7 && col_dw_left >= 0){
      b[row_dw_left][col_dw_left] = assign;

      row_dw_left++;
      col_dw_left--;
    }

    while(row_dw_right <= 7 && col_dw_right <= 7){
      b[row_dw_right][col_dw_right] = assign;

      row_dw_right++;
      col_dw_right++;
    }

    setBoard(b);
  }





  function updateBoard(id: string, entryValue: number){
    let [d1, d2] = getCoordinates(id);


    //atualiza o tabuleiro com o valor informado.
    let tempBoard = board;
    tempBoard[d1][d2] = entryValue;
    setBoard(tempBoard);
    
    rowAttack(d1, d2, entryValue);
    colAttack(d1, d2, entryValue);
    diagAttack(d1, d2, entryValue);

    console.log(d1,d2);
  }



  function play(id: string){
    const currentPosition = getPositionValue(id);

    // Se posição estiver Disponível.
    if(currentPosition === 0 && queensLeft > 0){
      // Adiciona o Elemento na Pagina
      document.getElementById(id)!.innerHTML = '<img src='+queen+' alt="Queen"/>'

      updateBoard(id, 1);

      setQueensLeft(queensLeft - 1);

      if(queensLeft - 1 === 0){
        alert("Parabéns! Você solucionou o Problema das 8 Rainhas");
      }
    }

    // Se posição estiver Ocupada.
    else if(currentPosition === 1){
      // Adiciona o Elemento na Pagina
      document.getElementById(id)!.innerHTML = ''

      updateBoard(id, 0);

      setQueensLeft(queensLeft + 1);
    }


    // Alerta o usuário que o local é inválido para posionar uma nova peça.
    else if(currentPosition === 2){
      alert("Posição Inválida! Essa é uma posição que pode ser Atacada!")
    }
  }





  function newGame(){
    let id = "";
    let v = 0;

    for(let i = 1; i <= 64; i++){
      id = String(i);
      document.getElementById(id)!.innerHTML = ''; 
    }
    // Limpa os dados do Tabuleiro
    setBoard(
      [[0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0],
       [0,0,0,0,0,0,0,0]]
    );

    setQueensLeft(8);
  }





  function cl(){
    for(let i = 1; i <= 64; i++){
      let id = String(i);
      document.getElementById(id)!.style.backgroundColor = "";
    }
  }

  function red(){
    for(let i = 1; i <= 64; i++){
      let id = String(i);
      if(getPositionValue(id) !== 0)
        document.getElementById(id)!.style.backgroundColor = "red";
    }
  }





  return (
    <Fragment>
      
      <div className="ui">
        <span>Peças Restantes: {queensLeft}</span>
        
        <button className="new-game" onClick={() => newGame()}>Novo Jogo</button>
        <button className="solve" onClick={() => {}}>Solucionar Jogo</button>
        <button className="solve" onClick={() => red()}>VERMELHO</button>
        <button className="solve" onClick={() => cl()}>CLEAR</button>
		  </div>  


      <div className="content">
        <div className="board">
          <div className="pos" id="1" onClick={() => play("1")}></div>
          <div className="pos" id="2" onClick={() => play("2")}></div>
          <div className="pos" id="3" onClick={() => play("3")}></div>
          <div className="pos" id="4" onClick={() => play("4")}></div>
          <div className="pos" id="5" onClick={() => play("5")}></div>
          <div className="pos" id="6" onClick={() => play("6")}></div>
          <div className="pos" id="7" onClick={() => play("7")}></div>
          <div className="pos" id="8" onClick={() => play("8")}></div>

          <div className="pos" id="9" onClick={() => play("9")}></div>
          <div className="pos" id="10" onClick={() => play("10")}></div>
          <div className="pos" id="11" onClick={() => play("11")}></div>
          <div className="pos" id="12" onClick={() => play("12")}></div>
          <div className="pos" id="13" onClick={() => play("13")}></div>
          <div className="pos" id="14" onClick={() => play("14")}></div>
          <div className="pos" id="15" onClick={() => play("15")}></div>
          <div className="pos" id="16" onClick={() => play("16")}></div>

          <div className="pos" id="17" onClick={() => play("17")}></div>
          <div className="pos" id="18" onClick={() => play("18")}></div>
          <div className="pos" id="19" onClick={() => play("19")}></div>
          <div className="pos" id="20" onClick={() => play("20")}></div>
          <div className="pos" id="21" onClick={() => play("21")}></div>
          <div className="pos" id="22" onClick={() => play("22")}></div>
          <div className="pos" id="23" onClick={() => play("23")}></div>
          <div className="pos" id="24" onClick={() => play("24")}></div>

          <div className="pos" id="25" onClick={() => play("25")}></div>
          <div className="pos" id="26" onClick={() => play("26")}></div>
          <div className="pos" id="27" onClick={() => play("27")}></div>
          <div className="pos" id="28" onClick={() => play("28")}></div>
          <div className="pos" id="29" onClick={() => play("29")}></div>
          <div className="pos" id="30" onClick={() => play("30")}></div>
          <div className="pos" id="31" onClick={() => play("31")}></div>
          <div className="pos" id="32" onClick={() => play("32")}></div>

          <div className="pos" id="33" onClick={() => play("33")}></div>
          <div className="pos" id="34" onClick={() => play("34")}></div>
          <div className="pos" id="35" onClick={() => play("35")}></div>
          <div className="pos" id="36" onClick={() => play("36")}></div>
          <div className="pos" id="37" onClick={() => play("37")}></div>
          <div className="pos" id="38" onClick={() => play("38")}></div>
          <div className="pos" id="39" onClick={() => play("39")}></div>
          <div className="pos" id="40" onClick={() => play("40")}></div>

          <div className="pos" id="41" onClick={() => play("41")}></div>
          <div className="pos" id="42" onClick={() => play("42")}></div>
          <div className="pos" id="43" onClick={() => play("43")}></div>
          <div className="pos" id="44" onClick={() => play("44")}></div>
          <div className="pos" id="45" onClick={() => play("45")}></div>
          <div className="pos" id="46" onClick={() => play("46")}></div>
          <div className="pos" id="47" onClick={() => play("47")}></div>
          <div className="pos" id="48" onClick={() => play("48")}></div>

          <div className="pos" id="49" onClick={() => play("49")}></div>
          <div className="pos" id="50" onClick={() => play("50")}></div>
          <div className="pos" id="51" onClick={() => play("51")}></div>
          <div className="pos" id="52" onClick={() => play("52")}></div>
          <div className="pos" id="53" onClick={() => play("53")}></div>
          <div className="pos" id="54" onClick={() => play("54")}></div>
          <div className="pos" id="55" onClick={() => play("55")}></div>
          <div className="pos" id="56" onClick={() => play("56")}></div>

          <div className="pos" id="57" onClick={() => play("57")}></div>
          <div className="pos" id="58" onClick={() => play("58")}></div>
          <div className="pos" id="59" onClick={() => play("59")}></div>
          <div className="pos" id="60" onClick={() => play("60")}></div>
          <div className="pos" id="61" onClick={() => play("61")}></div>
          <div className="pos" id="62" onClick={() => play("62")}></div>
          <div className="pos" id="63" onClick={() => play("63")}></div>
          <div className="pos" id="64" onClick={() => play("64")}></div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
