import React from 'react';
import './search-box.styles.css';

interface Props{
    onChangeHandler: () => void,
    placeholder: string
}

const SearchBox: React.FC<Props> =({onChangeHandler, placeholder}): JSX.Element =>
(
        <div>
            <input 
            className="search-box" 
            type='search' 
            placeholder= {placeholder}
            onChange={onChangeHandler} />
        </div>
);
export default SearchBox;