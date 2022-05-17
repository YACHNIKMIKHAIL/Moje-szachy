import React, {FC} from 'react';
import {Figure} from "../models/figures/Figure";

interface LostFiguresProps {
    title: string
    figures: Figure[]
}

const LostFigures: FC<LostFiguresProps> = ({title, figures}: LostFiguresProps) => {
    return (
        <div className={'lost'}>
            <h3> {title}</h3>
            {figures.map((f) => {
                return <div key={f.id}>
                    {f.name}
                    {f.logo && <img width={20} height={20} src={f.logo} alt="logo"/>}
                </div>
            })}
        </div>
    );
};

export default LostFigures;