import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  // console.log(props.notes)
  const generateNote = () => {
    return props.notes.map(note => {
      return (
          <NoteItem
            key={note.id}
            note={note}
            handleRenderClick={props.handleRenderClick}
            />
      )
    })
  }
    return (
    <ul>
      {generateNote()}
    </ul>
    )
}
export default NoteList;
