import React from "react";
import vocData from "./vocData"
import Voc from "./Voc";


function App(){
  const vocComponents = vocData.map(item => 
  <Voc
    key={item.id}
    voc={item.voc}
    vocInTC={item.vocInTC}
    sentence={item.sentence}
    sentenceInTC={item.sentenceInTC}
    category={item.category}
  />);

  return(
    <div>
      {vocComponents}
    </div>
  );
}

export default App