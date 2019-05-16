import React from 'react'

class Search extends React.Component {
  state = {
    inputSearch: '',
  }
  handleSearch = (event) => {
    const newInput = event.target.value;
    this.props.searchInput(newInput);
    this.setState({ inputSearch: event.target.value })
  }
  render() {
    return (
     <div className="search-bar">
      <input type="text" placeholder="food" value={this.state.inputSearch} onChange={this.handleSearch} />
     </div>
  )
  }
}

export default Search
