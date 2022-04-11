import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

import "./App.css";
import Genre from "./components/genre";
import { BookContext, SetBookContext } from "./helper/Context";
import Subgenre from "./components/subgenre";
import AddNewSubgenre from "./components/newSubgenre";
import Information from "./components/information";
import { genreData } from "./helper/AppData";
import Success from './components/Success';

const initialState = {
  genre: null,
  subgenre: null,
  information: {
    title: "",
    author: "",
    isbn: "",
    publisher: "",
    datePublisher: "",
    numberOfPagers: "",
    format: "",
    edition: "",
    editionLanguage: "",
    description: "",
  },
  addNewSubgenre:false,
};

function App() {
  const [book, setBook] = useState(initialState);
  const [genre,setGenre] = useState(genreData);

  

  return (
    <BookContext.Provider value={{
      book:book,
      genre:genre
      }}>
      <SetBookContext.Provider value={{
        setBook:setBook,
        setGenre:setGenre,
        }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Genre toast={toast} />} />
            <Route path="/sub-genre" element={<Subgenre toast={toast}/>}/>
            <Route path="/add-new-subgenre" element={<AddNewSubgenre toast={toast}/>}/>
            <Route path="/information" element={<Information toast={toast}/>}/>
            <Route path='/success' element={<Success/>}/>
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </SetBookContext.Provider>
    </BookContext.Provider>
  );
}

export default App;
