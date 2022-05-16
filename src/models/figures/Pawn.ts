import {Figure, FigureNames} from "./Figure";
import blackLogo from './../../assets/black-pawn.png'
import whiteLogo from './../../assets/white-pawn.png'
import {Colors} from "../Colors";
import {Cell} from "../Cell";

export class Pawn extends Figure {
    isFirstStep: boolean = true

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.PAWN
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false
        }
        const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1
        const first = this.cell.figure?.color === Colors.BLACK ? 1 : -1

        return true
    }

    moveFigure(target: Cell) {
        super.moveFigure(target);
        this.isFirstStep = false
    }
}