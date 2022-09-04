import React from 'react';
import Card from "../card/card.component";
import './card-list.styles.css';

interface Props{
    monsters: {
        name:string, 
        email:string, 
        id:string
    }[], 
}
const CardList = ({monsters}:Props): JSX.Element => (
    <div className="card-list">
        { monsters.map((monster) => {
            return(
            <Card 
            name ={monster.name} 
            email={monster.email} 
            key={monster.id} />
            );
        })}
    </div>
);
export default CardList;
