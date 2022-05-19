import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        // console.log(target.figure?.name,target.figure?.color)
        let direction: number = 1
        if (!super.canMove(target))
            return false;

        // if (target.y === this.cell.y + direction)
        //     return true
        // if (target.x === this.cell.x + direction)
        //     return true

        return (
            (target.y === this.cell.y + direction
                || target.y === this.cell.y
                || target.y === this.cell.y - direction) &&
            (target.x === this.cell.x + direction
                || target.x === this.cell.x
                || target.x === this.cell.x - direction)
        )
        // const dx = Math.abs(this.cell.x - target.x);
        // const dy = Math.abs(this.cell.y - target.y);
        //
        // return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
    }
}
