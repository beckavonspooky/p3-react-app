import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {searchString: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({ searchString: event.target.value })
    }

    handleSubmit(event) {
        // console.log(this.state.searchString)
        const searchValue = this.state.searchString
        console.log(searchValue +  ' ' + typeof(searchValue))
        event.preventDefault()
        return searchValue;    
    }
    render() {
        return (
            <div>
                <form  onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    // value={this.state.searchString}
                    onChange={this.handleChange}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
    
}
export default SearchBar;