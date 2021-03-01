import { clear } from 'console';
import React, { Fragment, useRef, useState } from 'react';
import { MdError } from 'react-icons/md'


import './App.css';
import queen from './images/chess_queen.svg'

function App() {

	const [displayQueensLeft, setDisplayQueensLeft] = useState<number>(8);

	// Variáveis de Controle do Jogo.
	// queensLeft - Determina o número de rainhas disponíveis para serem posicionadas.
	// queensList - Armazena as posições onde estão as rainhas do tabuleiro
	// boardState - Estado atual do tabuleiro
		// 0 - Indica posição livre
		// 1 - Indica posição ocupada
		// 2 - Indica posicao sob ataque
	let queensLeft = useRef(8);
	let queenList = useRef<string[]>([])
	let boardState = useRef([[0,0,0,0,0,0,0,0],
													 [0,0,0,0,0,0,0,0],
													 [0,0,0,0,0,0,0,0],
													 [0,0,0,0,0,0,0,0],
													 [0,0,0,0,0,0,0,0],
													 [0,0,0,0,0,0,0,0],
													 [0,0,0,0,0,0,0,0],
													 [0,0,0,0,0,0,0,0]])

													 
	function getCoordinates(id: string){
		// Converte o id de referencia da posição para as coordenadas da matriz
		const parsedID = Number(id);
  	const row = Math.floor((parsedID-1)/8);
  	const col = (parsedID-1)%8;

		return [row, col];
	}

	function getBoardState(id: string, board: number[][]){
		// Retorna o Estado (0-2) da posição informada para um dado tabuleiro
		const [row, col] = getCoordinates(id);

		return board[row][col];
	}

	function updateBoardUI(id: string){
		// Atualiza o tabuleiro adicionando/removendo peças
		
		const htmlElement = document.getElementById(id);

		if(htmlElement){
			
			if(htmlElement.innerHTML !== ''){
				htmlElement.innerHTML = '';
			}
			else{
				htmlElement.innerHTML = '<img src='+queen+' alt="Queen"/>';
			}

		}
	}

	function rowAttack(row: number, col: number, tempBoard: number[][]){
		/*
			Dada a posição de uma peça, percorre a linha onde aquela peça está, alterando o
			estado das posições que estão vazias para sob ataque.
		*/

		for(let i = 0; i <= 7; i++){
			if(tempBoard[row][i] === 0)
				tempBoard[row][i] = 2;
		}
	}

	function colAttack(row: number, col: number, tempBoard: number[][]){
		/*
			Dada a posição de uma peça, percorre a coluna onde aquela peça está, alterando o
			estado das posições que estão vazias para sob ataque.
		*/

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

			Percorre as posições que estão na diagonal de uma dada peça, alterando as
			posições com estado vazio para sob ataque.
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

	function updateBoardState(queenList: string[]){
		// Dada uma lista de posições de rainhas, atualiza o tabuleiro.
		// Marcando as posições livre, ocupadas e sob ataque
		
		let [row, col] = [0, 0];
		let board = [[0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0],
					 	 [0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0]]

	
		queenList.forEach(id => {
			[row, col] = getCoordinates(id);
			
			board[row][col] = 1;
			rowAttack(row, col, board);
			colAttack(row, col, board);
			diagAttack(row, col, board);
		})

		return board;
	}

	function updateQueenList(id: string, queenList: string[], action: string){
		// Dada uma posição do tabuleiro, atualiza a lista de rainhas:
		// Adicionando caso a posição esteja livre.
		// Removendo caso a posição esteja ocupada.
	
		if(action === 'add'){
			queenList.push(id);
		} 
		else if(action === 'remove'){
			const index = queenList.indexOf(id);
			queenList.splice(index, 1);
		}
	}

	function addPiece(id: string, board: number[][]){
		// realiza o processo de adicionar uma peça no tabuleiro



		updateBoardUI(id);

		queensLeft.current--;
		setDisplayQueensLeft(queensLeft.current);

		updateQueenList(id, queenList.current, 'add');
		// console.log(queenList.current);

		boardState.current = updateBoardState(queenList.current);
		console.log(boardState.current);
		
	}

	function removePiece(id: string, board: number[][]){
		// Realiza o processo de remover uma peça do tabuleiro

		
		updateBoardUI(id);

		queensLeft.current++;
		setDisplayQueensLeft(queensLeft.current);

		updateQueenList(id, queenList.current, 'remove');
		// console.log(queenList.current);

		boardState.current = updateBoardState(queenList.current);
		console.log(boardState.current)
	}



	function play(id: string, player: number){
		// Dada uma posição realiza o ato de jogar, podendo:
		// Adicionar uma peça na posição
		// Remover uma peça da posição
		// Receber um aleta de que a posição está sob ataque

		//player informa se o movimento foi realizado por um jogador (1), ou pelo algoritmo de solução(0)
		
		let state = getBoardState(id, boardState.current);

		if(state === 0){
			addPiece(id, boardState.current);
		}
		else if(state === 1){
			removePiece(id, boardState.current);
		}
		else if(state === 2){
			alert("Movimento Inválido! Essa posição está sob ataque de uma Rainha!");
		}

		if(queensLeft.current === 0 && player === 1){
			alert("Parabéns você encontrou uma solução para o problema das 8 rainhas!!!")
		}
	}


	function clean(){
		/**
		 * Limpa os campos marcados por vermelho.
		 */

		let id = '';

		for(let i = 1; i <= 64; i++){
			id = String(i);
			document.getElementById(id)!.style.backgroundColor = '';
		}
	}

	function newGame(){
		// QueensLeft Reset
		queensLeft.current = 8;
		setDisplayQueensLeft(queensLeft.current);

		// QueenList and UI Reset.
		queenList.current.forEach(id => {
			document.getElementById(id)!.innerHTML = '';
		})
		queenList.current = [];

		// State Board Reset
		boardState.current = [[0,0,0,0,0,0,0,0],
													[0,0,0,0,0,0,0,0],
													[0,0,0,0,0,0,0,0],
													[0,0,0,0,0,0,0,0],
													[0,0,0,0,0,0,0,0],
													[0,0,0,0,0,0,0,0],
													[0,0,0,0,0,0,0,0],
													[0,0,0,0,0,0,0,0]]

		clean();
	}

	function red(){
		/*
		 * Marca de Vermelho as posições ocupadas por peças e as posições sob ataque de
			 alguma peça.
		*/
		clean();

		let state = 0;
		let id = '';

		for(let i = 1; i <= 64; i++){
			id = String(i);
			state = getBoardState(id, boardState.current);

			if(state !== 0){
				document.getElementById(id)!.style.backgroundColor = "red";
			}
		}
	}

  

	function getEmptyPositions(board: number[][]){
		/**
		 * Retorna o conjunto de posições que estão vazias e que não estão sob ataque de
		   nenhuma outra rainha.
		 */

		let emptyPositions = [];
		
		for(let i = 1; i <= 64; i++){
			let id = String(i);

			if(getBoardState(id, board) === 0){
				emptyPositions.push(id);
			}
		}

		return emptyPositions;
	}

	function solve(queenList: string[], queensLeft: number): [number, string[], number[][]]{
		/**
		 * Dado o Estado atual do Tabuleiro, o algoritmo busca uma solução para o problema.
		 */
		

		/**
		 * Copia a lista de posições das rainhas e a quantidade restante de rainhas a serem
		   jogadas.

		 * Cria um tabuleiro com o estado atual do jogo, e determina as posições vazias.	 
		 */
		let currentQueenList = [...queenList]; // O spread operator é utilizado para criar uma copia por valor, e não por referência, do aray.
		let currentQueensLeft = queensLeft;
		let board = updateBoardState(currentQueenList); 
		let emptyPositions = getEmptyPositions(board);


		while(emptyPositions.length > 0){
			// Extrai o id de uma posição.
			let id = emptyPositions.pop();
			
			if(id){
				//Joga a peça
				let newQueenList= [...currentQueenList]
				updateQueenList(id, newQueenList, 'add');

				let newBoard     = updateBoardState(newQueenList);
				let newQueensLeft = currentQueensLeft - 1;


				if(newQueensLeft === 0){
					return [1, newQueenList, newBoard];
				}
				else {
					const result = solve(newQueenList, newQueensLeft);
					
					if(result[0] === 1) return result;
					
					updateQueenList(id, newQueenList, 'remove');
				}
			}
		}

		if(currentQueensLeft > 0){
			return [0, currentQueenList, board];
		}

		return [0, [], [[]]];
	}




	// Abaixo segue o código da interface
  return (
    <Fragment>
      
      <div className="ui">
        <span>Peças Restantes: {displayQueensLeft}</span>
        
        <button className="new-game" onClick={() => newGame()}>Novo Jogo</button>
        <button className="solve" onClick={() => {
					const [result, ql, b] = solve(queenList.current, queensLeft.current)
					
					if(result === 1){
						alert("Uma Solução foi Encontrada com Sucesso!");

						//boardState.current = b;

						queenList.current.forEach(id => {
							const index = ql.indexOf(id);
							ql.splice(index, 1);
						})

						ql.forEach(id => {
							play(id, 0);
						})

						console.log(ql);
						
					}
					else if(result === 0){
						alert("Dado o estado atual do tabuleiro, não foi possível encontrar uma solução.")
					}
					
				}}>Solucionar Jogo</button>
        <button className="solve" onClick={() => red()}>Posições Válidas</button>
        <button className="solve" onClick={() => clean()}>Limpar</button>
				<div className="icon">
					<button className="bIcon" disabled 
					title="
								Novo Jogo - Cria um novo tabuleiro para jogar
					      Solucionar Jogo - Dado o Estado Atual do Tabuleiro, Busca uma solução para o problema
								Posições Válidas - Marca as posições que são inválidas para colocar uma peça
								Limpar - Limpa as marcações do tabuleiro">
						<MdError className="icon" color='black' size={30}/>
					</button>
				</div>

		  </div>  

      <div className="content">
        <div className="board">
          <div className="pos" id="1" onClick={() => play("1", 1)}></div>
          <div className="pos" id="2" onClick={() => play("2", 1)}></div>
          <div className="pos" id="3" onClick={() => play("3", 1)}></div>
          <div className="pos" id="4" onClick={() => play("4", 1)}></div>
          <div className="pos" id="5" onClick={() => play("5", 1)}></div>
          <div className="pos" id="6" onClick={() => play("6", 1)}></div>
          <div className="pos" id="7" onClick={() => play("7", 1)}></div>
          <div className="pos" id="8" onClick={() => play("8", 1)}></div>

          <div className="pos" id="9" onClick={() => play("9", 1)}></div>
          <div className="pos" id="10" onClick={() => play("10", 1)}></div>
          <div className="pos" id="11" onClick={() => play("11", 1)}></div>
          <div className="pos" id="12" onClick={() => play("12", 1)}></div>
          <div className="pos" id="13" onClick={() => play("13", 1)}></div>
          <div className="pos" id="14" onClick={() => play("14", 1)}></div>
          <div className="pos" id="15" onClick={() => play("15", 1)}></div>
          <div className="pos" id="16" onClick={() => play("16", 1)}></div>

          <div className="pos" id="17" onClick={() => play("17", 1)}></div>
          <div className="pos" id="18" onClick={() => play("18", 1)}></div>
          <div className="pos" id="19" onClick={() => play("19", 1)}></div>
          <div className="pos" id="20" onClick={() => play("20", 1)}></div>
          <div className="pos" id="21" onClick={() => play("21", 1)}></div>
          <div className="pos" id="22" onClick={() => play("22", 1)}></div>
          <div className="pos" id="23" onClick={() => play("23", 1)}></div>
          <div className="pos" id="24" onClick={() => play("24", 1)}></div>

          <div className="pos" id="25" onClick={() => play("25", 1)}></div>
          <div className="pos" id="26" onClick={() => play("26", 1)}></div>
          <div className="pos" id="27" onClick={() => play("27", 1)}></div>
          <div className="pos" id="28" onClick={() => play("28", 1)}></div>
          <div className="pos" id="29" onClick={() => play("29", 1)}></div>
          <div className="pos" id="30" onClick={() => play("30", 1)}></div>
          <div className="pos" id="31" onClick={() => play("31", 1)}></div>
          <div className="pos" id="32" onClick={() => play("32", 1)}></div>

          <div className="pos" id="33" onClick={() => play("33", 1)}></div>
          <div className="pos" id="34" onClick={() => play("34", 1)}></div>
          <div className="pos" id="35" onClick={() => play("35", 1)}></div>
          <div className="pos" id="36" onClick={() => play("36", 1)}></div>
          <div className="pos" id="37" onClick={() => play("37", 1)}></div>
          <div className="pos" id="38" onClick={() => play("38", 1)}></div>
          <div className="pos" id="39" onClick={() => play("39", 1)}></div>
          <div className="pos" id="40" onClick={() => play("40", 1)}></div>

          <div className="pos" id="41" onClick={() => play("41", 1)}></div>
          <div className="pos" id="42" onClick={() => play("42", 1)}></div>
          <div className="pos" id="43" onClick={() => play("43", 1)}></div>
          <div className="pos" id="44" onClick={() => play("44", 1)}></div>
          <div className="pos" id="45" onClick={() => play("45", 1)}></div>
          <div className="pos" id="46" onClick={() => play("46", 1)}></div>
          <div className="pos" id="47" onClick={() => play("47", 1)}></div>
          <div className="pos" id="48" onClick={() => play("48", 1)}></div>

          <div className="pos" id="49" onClick={() => play("49", 1)}></div>
          <div className="pos" id="50" onClick={() => play("50", 1)}></div>
          <div className="pos" id="51" onClick={() => play("51", 1)}></div>
          <div className="pos" id="52" onClick={() => play("52", 1)}></div>
          <div className="pos" id="53" onClick={() => play("53", 1)}></div>
          <div className="pos" id="54" onClick={() => play("54", 1)}></div>
          <div className="pos" id="55" onClick={() => play("55", 1)}></div>
          <div className="pos" id="56" onClick={() => play("56", 1)}></div>

          <div className="pos" id="57" onClick={() => play("57", 1)}></div>
          <div className="pos" id="58" onClick={() => play("58", 1)}></div>
          <div className="pos" id="59" onClick={() => play("59", 1)}></div>
          <div className="pos" id="60" onClick={() => play("60", 1)}></div>
          <div className="pos" id="61" onClick={() => play("61", 1)}></div>
          <div className="pos" id="62" onClick={() => play("62", 1)}></div>
          <div className="pos" id="63" onClick={() => play("63", 1)}></div>
          <div className="pos" id="64" onClick={() => play("64", 1)}></div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
