import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Tytuł: ${title}; autor: ${author}; gatunek: ${genre}`);
  };

  return (

    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="bookTitle">Tytuł książki</label>
          <input
            type="text"
            className="form-control"
            id="bookTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

        </div>

        <div className="form-group mb-3">
          <label htmlFor="bookAuthor">Autor książki</label>
          <input
            type="text"
            className="form-control"
            id="bookAuthor"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

        </div>

        <div className="form-group mb-3">
          <label htmlFor="bookGenre">Gatunek</label>
          <select
            className="form-control"
            id="bookGenre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value=""></option>
            <option value="1">Powieść</option>
            <option value="2">Kryminał</option>
            <option value="3">Fantastyka</option>
            <option value="4">Biografia</option>

          </select>
          
        </div>

        <button type="submit" className="btn btn-primary">
          Dodaj
        </button>

      </form>

    </div>

  );
}

export default App;