import React from 'react';
import './card.styles.css';

interface Props {
    name: string,
    email: string,
    key: string
  }
const Card: React.FC<Props> = ({name, email, key}): JSX.Element =>(            
    <div className="card-container" key={key}>
        <img
            alt={`monster ${name}`}
            src={`https://robohash.org/${key}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>);
export default Card