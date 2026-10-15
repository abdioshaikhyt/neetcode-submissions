class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
         let row = Array.from({ length: 9 }, () => ({}));
    let col = Array.from({ length: 9 }, () => ({}));
    let box = Array.from({ length: 9 }, () => ({}));

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let currentCell = board[i][j];

            if (currentCell === ".") {
                continue;
            }
            else {
                let rowBand = Math.floor(i / 3);
                let colBand = Math.floor(j / 3);
                let b = 3 * rowBand + 1 * colBand;

                // TODO (yours): the if that returns false on a duplicate
                if(row[i][currentCell] !== undefined) {
                    return false;
                }
                if(col[j][currentCell] !== undefined) {
                    return false;
                }
                if(box[b][currentCell] !== undefined) {
                    return false
                }
                row[i][currentCell] = 1;
                col[j][currentCell] = 1;
                box[b][currentCell] = 1;
               
            }
        }
    }
    return true;
   
}
    }

