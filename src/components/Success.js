import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { initialBookState } from "../helper/AppData";
import { BookContext, SetBookContext } from "../helper/Context";

export default function Success() {
  const setBookContext = useContext(SetBookContext);
  const bookContext = useContext(BookContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Book Added :", bookContext.book);
  }, []);

  return (
    <div className="content">
      <div className="align-center">
        <h2>Book Added Successfully</h2>
        <button
          onClick={() => {
            navigate("/");
            setBookContext.setBook(initialBookState);
          }}
          className="done-btn"
        >
          Add Another Book
        </button>
      </div>
    </div>
  );
}
