import React, { useState } from 'react';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, text]);
    setText('');
  };

  return (
    <div className="comments">
      <h3>Comentarii</h3>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Lasă un comentariu..."
        />
        <button type="submit">Trimite</button>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
