import { TupleType } from "typescript";

export function generateBoard(sizeType : number) {
    // 16 x 16
    let gridSize = 16;
    let bombNumber = 40;
    let bombs : boolean[][] = [];

    for (let i = 0; 0 < gridSize; i++) {
        let line : boolean[] = [];

        for (let j = 0; 0 < gridSize; j++) {
            line.push(false);
        }

    }

    while (bombNumber > 0) {
        let x = Math.round(Math.random() * 16);
        let y = Math.round(Math.random() * 16);

        if ((x, y) in bombs)

    }

}
