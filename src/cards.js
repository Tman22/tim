import React from 'react';

export const Card = ({ deleteIt, id, title, body}) => {

  return (
    <div>
      Tim Ideas Yo
      <h1> {title} </h1>
      <h1> {body} </h1>
      <button onClick={() => deleteIt(id)}>Delete </button>
    </div>
  )
}
