const displayGameStatus = document.querySelector('.status');
const WIN_CONDITION = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];

const printWinMessage = () => `Player ${chosen_player} won!`;
const playerTurn = () => `${chosen_player} turn`;
const outputResults = () => `Draw!`;

let game_grid = ["", "", "", "", "", "", "", "", ""];
let chosen_player = "X";
let game_status = true;

displayGameStatus.innerHTML = playerTurn();

function clickOnBlock(action) 
{
    const chosen_block = action.target;
    const chosen_block_index = parseInt(chosen_block.getAttribute('data-cell-index'));

    if (game_grid[chosen_block_index] !== "" || !game_status) 
        return;
    
    fillBlock(chosen_block, chosen_block_index);
    checkResults();
}

function fillBlock(chosen_block, chosen_block_index) 
{
    game_grid[chosen_block_index] = chosen_player;
    chosen_block.innerHTML = chosen_player;
}

function handleRestartGame() 
{
    game_grid = ["", "", "", "", "", "", "", "", ""];
    chosen_player = "X";
    game_status = true;

    document.querySelectorAll('.block').forEach(cell => cell.innerHTML = "");
    displayGameStatus.innerHTML = playerTurn();
}

function turn() 
{
    chosen_player = chosen_player === "X" ? "O" : "X";
    displayGameStatus.innerHTML = playerTurn();
}

function checkResults() 
{
    let ifWin = false;
    
    for (let i = 0; i <= 7; i++) 
    {
        const winCondition = WIN_CONDITION[i];  
        let c = game_grid[winCondition[2]];
        let b = game_grid[winCondition[1]];
        let a = game_grid[winCondition[0]];

        if (a === '' || b === '' || c === '') 
        {
            continue;
        }
        if (a === b && b === c) 
        {
            ifWin = true;
            break
        }
    }

    if (ifWin) 
    {
        game_status = false;
        displayGameStatus.innerHTML = printWinMessage();
        return;
    }

    let draw_game = !game_grid.includes("");
    if (draw_game) 
    {
        game_status = false;
        displayGameStatus.innerHTML = outputResults();
        return;
    }

    turn();
}

document.querySelectorAll('.block').forEach(cell => cell.addEventListener('click', clickOnBlock));
document.querySelector('.restart_game').addEventListener('click', handleRestartGame);