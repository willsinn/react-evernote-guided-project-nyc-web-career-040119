import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className='master-detail-element sidebar'>
        <NoteList
          notes={this.props.notes}
          handleRenderClick={this.props.handleRenderClick}/>
        <button>New</button>
      </div>
    );
  }
}

export default Sidebar;
