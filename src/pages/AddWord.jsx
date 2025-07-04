import React, { useState } from 'react';
import './AddWord.css';

const AddWord = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!word || !definition) {
      setMessage('⚠️ Word and Definition are required.');
      return;
    }

    try {
      const res = await fetch('https://language-vocabulary-builder.onrender.com/api/words', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ word, definition, image }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('✅ Word added successfully!');
        setWord('');
        setDefinition('');
        setImage('');
      } else {
        setMessage(`❌ Error: ${data.message}`);
      }
    } catch (err) {
      setMessage('❌ Server error. Please try again.');
    }
  };

  return (
    <div className="addword-container">
      <h2>➕ Add New Word</h2>
      {message && <p className="status-message">{message}</p>}
      <form className="addword-form" onSubmit={handleSubmit}>
        <label>Word:</label>
        <input
          type="text"
          placeholder="Enter the word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          required
        />

        <label>Definition:</label>
        <textarea
          placeholder="Write the definition"
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
          required
        />

        <label>Bangla Meaning:</label>
        <textarea
          placeholder="Write the Bangla meaning of Englis Word"
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
          required
        />

        <label>Image URL (optional):</label>
        <input
          type="text"
          placeholder="Paste image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label>Or Upload Image:</label>
        <input type="file" accept="image/*" disabled />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddWord;
