import { SSL_OP_EPHEMERAL_RSA } from 'constants';
import { stringify } from 'querystring';
import React, { Fragment } from 'react';
import { useState } from 'react';


import './App.css';
import queen from './images/chess_queen.svg'

function App() {
	const [queensLeft, setQueensLeft] = useState<number>(8);
	const [boardState, setBoardState] = useState<number[][]>(
    [[0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0]]
  );
	const [queenList, setQueenList] = useState<string[]>([]);
	

	function getCoordinates(id: string){
		const n = Number(id);
  	const row = Math.floor((n-1)/8);
  	const col = (n-1)%8;

		return [row, col];
	}

	function getState(id: string){
		//Calcula as Coordenadas da Posição.
		const [row, col] = getCoordinates(id);

		//Fetch State
		const state = boardState[row][col];

		//Return State
		return state;
	}

	function updateBoardUI(id: string, action: string){
		let pos = document.getElementById(id);

		if(action === 'add'){
			pos!.innerHTML = '<img src='+queen+' alt="Queen"/>'
		}
		else if(action === 'remove'){
			pos!.innerHTML = '';
		}
	}

	function updateQueenList(id: string, action: string){
		let temp = queenList;

		if(action === 'add'){
			temp.push(id);
			setQueenList(temp);
		}
		else if(action === 'remove'){
			const index = temp.indexOf(id);
			temp.splice(index, 1);
			setQueenList(temp);
		}
	}

	function clearBoard(){
		setBoardState(
			[[0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0]]
		);
	}

	function rowAttack(row: number, col: number, tempBoard: number[][]){
		//Percorre todas as Colunas do tabuleiro para a linha row
		//caso a coluna seja diferente da que a peça está colocada, o valor é definido
		//como 2.

		for(let i = 0; i <= 7; i++){
			if(tempBoard[row][i] === 0)
				tempBoard[row][i] = 2;
		}
	}

	function colAttack(row: number, col: number, tempBoard: number[][]){
		//Percorre todas as linha do tabuleiro para a coluna col
		//caso aquela posição esteja marcada com 0, atualiza ela.

		for(let i = 0; i <= 7; i++){
			if(tempBoard[i][col] === 0){
				tempBoard[i][col] = 2;
			}
		}
	}

	function diagAttack(row: number, col: number, tempBoard: number[][]){
		/*
			lu: left-up
			ld: left-down
			ru: right-up
			rd: right-down
		*/

		let row_lu = row - 1, col_lu = col - 1;
		let row_ld = row + 1, col_ld = col - 1;
		let row_ru = row - 1, col_ru = col + 1;
		let row_rd = row + 1, col_rd = col + 1;


		while(row_lu >= 0 && col_lu >= 0){
			if(tempBoard[row_lu][col_lu] === 0)
				tempBoard[row_lu][col_lu] = 2;

			row_lu--;
			col_lu--;
		}


		while(row_ld <= 7 && col_ld >= 0){
			if(tempBoard[row_ld][col_ld] === 0)
				tempBoard[row_ld][col_ld] = 2;

			row_ld++;
			col_ld--;
		}


		while(row_ru >= 0 && col_ru <= 7){
			if(tempBoard[row_ru][col_ru] === 0)
				tempBoard[row_ru][col_ru] = 2;

			row_ru--;
			col_ru++;
		}


		while(row_rd <= 7 && col_rd <= 7){
			if(tempBoard[row_rd][col_rd] === 0)
				tempBoard[row_rd][col_rd] = 2;

			row_rd++;
			col_rd++;
		}
	}

	function updateBoardState(){
		clearBoard();
		let tempBoard = boardState;
		
		queenList.forEach(id => {
			const [row, col] = getCoordinates(id);

			tempBoard[row][col] = 1; // Atualiza Tabuleiro onde a peça está.

			colAttack(row, col, tempBoard);
			rowAttack(row, col, tempBoard);
			diagAttack(row, col, tempBoard);

			setBoardState(tempBoard);

			//console.log(tempBoard);
		})
	}

	function adicionaPeça(id: string){
		updateBoardUI(id, 'add');

		updateQueenList(id, 'add');

		updateBoardState();

		setQueensLeft(queensLeft - 1);
	}

	function removePeça(id: string){
		updateBoardUI(id, 'remove');

		updateQueenList(id, 'remove');

		updateBoardState();

		setQueensLeft(queensLeft + 1);

	}

	function alerta(){
		alert("Movimento Inválido! Essa posição pode ser atacada por alguma Rainha.")
	}

	


	function play(id: string){
		const state = getState(id);

		if(state === 0 && queensLeft > 0)
			adicionaPeça(id);

		else if(state === 1)
			removePeça(id);

		else if(state === 2){
			alerta();
		}



	}




  function newGame(){
		clearBoard();

		queenList.forEach(x => {
			document.getElementById(x)!.innerHTML = '';
		})

		setQueenList([]);
		setQueensLeft(8);
		cl();
	}
  

	function red(){
		let state = 0;
		let id = '';

		for(let i = 1; i <= 64; i++){
			id = String(i);
			state = getState(id);

			if(state !== 0){
				document.getElementById(id)!.style.backgroundColor = "red";
			}
		}
	}

  function cl(){
		let id = '';

		for(let i = 1; i <= 64; i++){
			id = String(i);
			document.getElementById(id)!.style.backgroundColor = '';
		}
	}

	function logBoard(){
		console.log(boardState);
	}





  return (
    <Fragment>
      
      <div className="ui">
        <span>Peças Restantes: {queensLeft}</span>
        
        <button className="new-game" onClick={() => newGame()}>Novo Jogo</button>
        <button className="solve" onClick={() => {logBoard()}}>Solucionar Jogo</button>
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
