import React, {FC, useEffect, useState} from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";
import {Player} from "../models/Player";

interface BoardProps {
    board: Board
    setBoard: (board: Board) => void
    currentPlayer: Player | null
    swapPlayer: () => void
}

const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    // const selectCell = (cell: Cell) => {
    //     debugger
    //     console.log('selectCell')
    //     if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
    //         selectedCell?.moveFigure(cell)
    //         setSelectedCell(null)
    //         updateBoard()
    //     } else {
    //         setSelectedCell(cell)
    //     }
    // }

    function selectCell(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell?.moveFigure(cell)
            swapPlayer()
            setSelectedCell(null)
            updateBoard()
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell)
            }
        }
    }

    const updateBoard = () => {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }
    const hightLightCells = () => {
        board.hightLightCells(selectedCell)
        updateBoard()
    }


    useEffect(() => {
        hightLightCells()
    }, [selectedCell])

    return (
        <div>
            <h3>Current playar:{currentPlayer?.color}</h3>
            <div className={'board'}>
                {board.cells.map((row, i) => {
                        return <React.Fragment key={i}>
                            {row.map((cell) =>
                                <CellComponent cell={cell} key={cell.id}
                                               selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                                               selectCell={selectCell}/>
                            )}
                        </React.Fragment>
                    }
                )}
            </div>
        </div>
    )
        ;
};

export default BoardComponent;