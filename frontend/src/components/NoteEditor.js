import React, { Component } from 'react';

class NoteEditor extends Component {

  render() {
    console.log('%c <--editor--> ', 'background: #222; color: green');
    // console.log(this.props.note);
    console.log(this.props);
    return (
      <form className="note-editor">
        <input
          type="text"
          name="title"

          />
        <textarea
          type="text"
          name="body"

          />
        <div className="button-row">
          <input className="button" type="submit" value="Save" onSubmit={(e) => {this.props.handleSubmit(e, this.state.note)}}/>
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
