import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../App.css";
import {
  authorsData,
  bookFormatData,
  editionLanguageData,
  publicationData,
} from "../../helper/AppData";
import { BookContext, SetBookContext } from "../../helper/Context";
import StepView from "../StepView";

const initialState = {
  title: "",
  author: "J.K. Rowling",
  isbn: "",
  publisher: "Scholastic, Inc",
  datePublisher: "",
  numberOfPagers: "1",
  format: "EPUB",
  edition: "",
  editionLanguage: "English",
  description: "",
};

export default function Information({ toast }) {
  const navigate = useNavigate();
  const [information, setInformation] = useState(initialState);
  const bookContext = useContext(BookContext);
  const setBookContext = useContext(SetBookContext);

  const onTextChange = (e) => {
    setInformation({ ...information, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (information.title == "") {
      toast.error("Enter Book Title");
    } else if (information.isbn == "") {
      toast.error("Enter ISBN");
    } else if (information.datePublisher == "") {
      toast.error("Select Date Published");
    } else if (information.edition == "") {
      toast.error("Enter Edition");
    } else if (information.description == "") {
      toast.error("Enter description");
    } else {
      setBookContext.setBook({ ...bookContext.book, information: information });
      navigate("/success");
    }
  };

  return (
    <div className="information-view">
      <p>Add Book - New Book</p>
      <StepView />
      <form className="form-container">
        <label>Book Title</label>
        <input
          value={information.title}
          type="text"
          name="title"
          placeholder="Book Title"
          onChange={onTextChange}
        />
        <label>Author</label>
        <select
          onChange={(e) =>
            setInformation({ ...information, author: e.target.value })
          }
          value={information.author}
        >
          {authorsData.map((value) => (
            <option key={value.name} value={value.name}>
              {value.name}
            </option>
          ))}
        </select>
        <label>ISBN</label>
        <input
          value={information.isbn}
          type="text"
          name="isbn"
          placeholder="ISBN"
          onChange={onTextChange}
        />
        <label>Publisher</label>
        <select
          onChange={(e) =>
            setInformation({ ...information, publisher: e.target.value })
          }
          value={information.publisher}
        >
          {publicationData.map((value) => (
            <option key={value.name} value={value.name}>
              {value.name}
            </option>
          ))}
        </select>

        <label>Date Published</label>
        <input
          value={information.datePublisher}
          type="date"
          name="datePublisher"
          placeholder="Date Published"
          onChange={onTextChange}
        />
        <label>Number of pages</label>
        <input
          value={information.numberOfPagers}
          type="number"
          min={1}
          name="numberOfPagers"
          placeholder="Number of Pages"
          onChange={onTextChange}
        />
        <label>Format</label>
        <select
          onChange={(e) =>
            setInformation({ ...information, format: e.target.value })
          }
          value={information.format}
        >
          {bookFormatData.map((value) => (
            <option key={value.name} value={value.name}>
              {value.name}
            </option>
          ))}
        </select>
        <div className="row">
          <div>
            <label>Edition</label>
            <input
              value={information.edition}
              type="text"
              name="edition"
              placeholder="Edition"
              onChange={onTextChange}
            />
          </div>
          <div>
            <label>Edition Language</label>
            <select
              className="row-select"
              onChange={(e) =>
                setInformation({
                  ...information,
                  editionLanguage: e.target.value,
                })
              }
              value={information.editionLanguage}
            >
              {editionLanguageData.map((value) => (
                <option key={value.name} value={value.name}>
                  {value.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <label>Description</label>
        <textarea
          value={information.description}
          type="text"
          name="description"
          placeholder="Edition"
          onChange={onTextChange}
        />
      </form>
      <div className="button-view">
        <button onClick={() => navigate("/sub-genre")} className="prev-btn">
          {"< Back"}
        </button>
        <button onClick={() => onSubmit()} className="next-btn">
          {"Add "}
        </button>
      </div>
    </div>
  );
}
