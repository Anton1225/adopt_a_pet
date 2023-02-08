import React from 'react';
import './searchBar.css';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleTermChange = this.handleTermChange.bind(this)
    }
    handleTermChange(e) {
        this.setState({term: e.target.value})
    }
    
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
                <button className="SearchButton" onClick={this.props.onSearch} >SEARCH</button>
            </div>
        )
        
    }
}