import React, { Component } from 'react';
import './App.css';
import { Container, } from 'semantic-ui-react'
import axios from 'axios'
import MenuForm from './components/MenuForm'
import MenuList from './components/MenuList'


class App extends Component {

  state = { lists: [], };

  componentDidMount() {
    axios.get("/api/menus")
      .then( res => {
        this.setState({ lists: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }

  addMenu = (name) => {
    axios.post("/api/menus", { name })
      .then( res => {
        const { lists, } = this.state;
        this.setState({ lists: [...lists, res.data], });
      })
  }

  updateMenue = (id) => {
    axios.put(`/api/menus/${id}`)
      .then( res => {
        const lists = this.state.lists.map( m => {
          if (m.id === id)
            return res.data;
          return m;
        })
        this.setState({ lists, });
      })
  }

  deleteItem = (id) => {
    axios.delete(`/api/lists/${id}`)
      .then( res => {
        const { lists, } = this.state;
        this.setState({ lists: lists.filter( m => m.id !== id ), });
      })
  }
  
  render() {
    return (
      <Container>
        <h1>Menu's</h1>
        <MenuForm addMenu={this.addMenu} />
        <br />
        <br />
        <MenuList 
          lists={this.state.lists} 
          updateList={this.updateList}
          deleteList={this.deleteList}
        />
      </Container>
    );
  }
}

export default App;
