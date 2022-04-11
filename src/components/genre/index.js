import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "../../App.css";
import StepView from "../StepView";
import { BookContext, SetBookContext } from "../../helper/Context";

export default function Genre(props) {
  const bookContext = useContext(BookContext);
  const setBookContext = useContext(SetBookContext);
  const navigate = useNavigate();

  const onGenreSelect = (item) => {
    setBookContext.setBook({
      ...bookContext.book,
      subgenre: null,
      genre: item,
      addNewSubgenre: false,
    });
  };

  const isSelected = (item) => {
    return (
      "grid-item " +
      (bookContext && bookContext.book.genre?.id == item.id
        ? "selected-item"
        : "")
    );
  };

  const handleSubmit = () => {
    if (bookContext.book.genre) {
      navigate("/sub-genre");
    } else {
      props.toast.error("Select Genre");
    }
  };

  return (
    <div className="content">
      <p>Add Book - New Book</p>
      <StepView />
      <div className="grid-layout">
        {bookContext.genre.map((item,index) => {
          return (
            <button
              key={index}
              className={isSelected(item)}
              onClick={() => onGenreSelect(item)}
            >
              <p>{item.name}</p>
            </button>
          );
        })}
      </div>
      <div className="button-view">
        <button onClick={handleSubmit} className="next-btn">
          {"Next >"}
        </button>
      </div>
    </div>
  );
}
