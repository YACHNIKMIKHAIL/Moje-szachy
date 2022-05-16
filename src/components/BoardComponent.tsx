import React, {FC, useCallback, useEffect, useState} from 'react';
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
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell)
            setSelectedCell(null)
            updateBoard()
        } else {
            setSelectedCell(cell)
        }
    }
    const updateBoard = useCallback(() => {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }, [board, setBoard])
    const hightLightCells = useCallback(() => {
        board.hightLightCells(selectedCell)
        updateBoard()
    }, [board, selectedCell, updateBoard])


    useEffect(() => {
        hightLightCells()
    }, [selectedCell, hightLightCells])

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