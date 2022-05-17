import React, {FC} from 'react';
import {Cell} from "../models/Cell";

interface CellProps {
    cell: Cell
    selected: boolean
    selectCell: (cell: Cell) => void
}

const CellComponent: FC<CellProps> = ({cell, selected, selectCell}) => {
    return (
        <div className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
             onClick={() => {
                 selectCell(cell)
             }}
             style={{background: cell.available && cell.figure ? 'red' : ''}}>
            {cell.available && !cell.figure && <div className={'available'}/>}
            {cell.figure?.logo && <img src={cell.figure.logo} alt="logo"/>}
        </div>
    );
};

export default CellComponent;