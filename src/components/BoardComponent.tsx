import React, {FC, useState} from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";

interface BoardProps {
    board: Board
    setBoard: (board: Board) => void
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)
    const selectCell = (cell: Cell) => {
        setSelectedCell(cell)
    }
    return (
        <div className={'board'}>
            {board.cells.map((row, i) =>
                <React.Fragment key={i}>
                    {row.map((cell) =>
                        <CellComponent cell={cell} key={cell.id}
                                       selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                                       selectCell={selectCell}/>
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

export default BoardComponent;