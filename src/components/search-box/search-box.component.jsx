import { Component } from "react";
import './search-box.styles.css';
class SearchBox extends Component{
    render(){
        const {onChangeHandler, placeholder} =this.props;
        return (
            <div>
                <input 
        className="search-box" 
        type='search' 
        placeholder= {placeholder}
        onChange={onChangeHandler} />
            </div>
        )
    }
}
export default SearchBox;