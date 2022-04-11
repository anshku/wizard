import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "../../App.css";
import StepView from "../StepView";
import { BookContext, SetBookContext } from "../../helper/Context";

export default function Subgenre({ toast }) {
  const bookContext = useContext(BookContext);
  const setBookContext = useContext(SetBookContext);
  const navigate = useNavigate();

  const onSubgenreSelect = (item) => {
    setBookContext.setBook({
      ...bookContext.book,
      subgenre: item,
      addNewSubgenre: false,
    });
  };

  const isSelected = (item) => {
    return (
      "grid-item " +
      (bookContext && bookContext.book.subgenre?.id == item.id
        ? "selected-item"
        : "")
    );
  };

  const getSubGenreByGenre = () => {
    if (bookContext && bookContext.book.genre) {
      let genre = bookContext.genre.find(
        (ele) => ele.id == bookContext.book.genre.id
      );
      return genre.subgenres;
    } else {
      return [];
    }
  };

  return (
    <div className="content">
      <p>Add Book - New Book</p>
      <StepView />
      <div className="grid-layout">
        {bookContext
          ? getSubGenreByGenre().map((item) => {
              return (
                <button
                key={item.name}
                  className={isSelected(item)}
                  onClick={() => onSubgenreSelect(item)}
                >
                  <p>{item.name}</p>
                </button>
              );
            })
          : null}
        <button
          className={
            "grid-item" +
            (bookContext.book.addNewSubgenre ? " selected-item" : "")
          }
          onClick={() =>
            setBookContext.setBook({
              ...bookContext.book,
              subgenre: undefined,
              addNewSubgenre: true,
            })
          }
        >
          <p>{"Add New Sub-Genre"}</p>
        </button>
      </div>
      <div className="button-view">
        <button onClick={() => navigate("/")} className="prev-btn">
          {"< Back"}
        </button>
        <button
          onClick={() => {
            if (bookContext.book.addNewSubgenre) {
              navigate("/add-new-subgenre");
            } else if (bookContext.book.subgenre) {
              navigate("/information");
            } else {
              toast.error("Select Sub-genre");
            }
          }}
          className="next-btn"
        >
          {"Next >"}
        </button>
      </div>
    </div>
  );
}
