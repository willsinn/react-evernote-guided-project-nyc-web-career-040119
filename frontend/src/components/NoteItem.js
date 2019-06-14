import React from 'react';


const truncated = (string) => {
  return string.substring(0, 20)
}
const NoteList = (props) => {
  return (
  <li onClick={(e) => {props.handleRenderClick(props.note)}}>
    <h2>{props.note.title}</h2>
    <p>{truncated(props.note.body)}</p>
  </li>
  )
};

export default NoteList;
