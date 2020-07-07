import React, { Component } from 'react';
import ReactSearchBox from 'react-search-box';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import {InputGroup,FormControl, Button} from 'react-bootstrap'
import {faSearch, faTimes} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      search : ''
    }
  };

  searchChange = event => {
    this.setState({ [event.target.name] : event.target.value })
  };

  cancelSearch = () => {
    this.setState({ "search" : '' })
  };

  render() {

    const {search} = this.state;

    return (
      <div>
        <InputGroup>
          <FormControl placeholder="Search" name="search" value={search} onChange={this.searchChange}/>
          <InputGroup.Append>
            <Button size="sm" variant="outline-info" type="button">
              <FontAwesomeIcon icon={faSearch}/>
            </Button>
            <Button size="sm" variant="outline-danger" type="button" onClick={this.cancelSearch}>
              <FontAwesomeIcon icon={faTimes}/>
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    )
  }
}