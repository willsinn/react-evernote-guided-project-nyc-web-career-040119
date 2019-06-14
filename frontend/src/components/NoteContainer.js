import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';
const USER_URL=`http://localhost:3000/api/v1/users/`
const USER_ID="1"



class NoteContainer extends Component {
  state = {
    notes:[],
    note:{},
    isEditing:false
  }
  componentDidMount(){
    fetch(USER_URL+`${USER_ID}`)
    .then(r => r.json())
    .then(user => {
      // console.log(user.notes);
      this.setState({ notes: user.notes })
    })
  }
  handleRenderClick = (trgtNote) => {
    // console.log(trgtNote);
    this.setState({note: trgtNote})
  }
  toggleEditNote = (e) =>{
    this.setState({isEditing: !this.state.isEditing})
  }
  render() {
    // console.log(this.state);
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar
            notes={this.state.notes}
            handleRenderClick={this.handleRenderClick}/>
          <Content
            note={this.state.note}
            isEditing={this.state.isEditing}
            toggleEditNote={this.toggleEditNote}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
