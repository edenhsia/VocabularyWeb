import React from "react";

function Voc(props){
  return(
    <dl>
      <dt>{props.voc}</dt>
      <dd>{props.vocInTC}</dd>
      <dt>{props.sentence}</dt>
      <dd>{props.sentenceInTC}</dd>
      <span>Category: {props.category}</span>
    </dl>
  )
}

export default Voc;