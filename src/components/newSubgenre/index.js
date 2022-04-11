import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../App.css";
import { BookContext, SetBookContext } from "../../helper/Context";
import StepView from "../StepView";

export default function AddNewSubgenre({ toast }) {
  const bookContext = useContext(BookContext);
  const setBookContext = useContext(SetBookContext);
  const [subgenre, setSubgenre] = useState({
    name: "",
    isDescriptionRequired: false,
  });
  const navigate = useNavigate();

  const onNext = () => {
    if (subgenre.name == "") {
      toast.error("Enter Name");
    } else {
      let length = bookContext.book.genre.subgenres.length;
      let lastId = bookContext.book.genre.subgenres[length - 1].id;
      let newSubgenre = {
        id: lastId + 1,
        ...subgenre,
      };
      let index = bookContext.genre.findIndex(
        (ele) => ele.id == bookContext.book.genre.id
      );
      let genres = bookContext.genre;
      genres[index].subgenres.push(newSubgenre);
      setBookContext.setBook({ ...bookContext.book, subgenre: newSubgenre });
      setBookContext.setGenre(genres);
      navigate("/information");
    }
  };

  return (
    <div className="content">
      <p>Add Book - New Book</p>
      <StepView />
      <div className="form-container">
        <input
          type="text"
          placeholder="Subgenre name"
          value={subgenre.name}
          onChange={(e) => setSubgenre({ ...subgenre, name: e.target.value })}
        />
        <label>
          <input
            type={"checkbox"}
            value={subgenre.isDescriptionRequired}
            onChange={() =>
              setSubgenre({
                ...subgenre,
                isDescriptionRequired: !subgenre.isDescriptionRequired,
              })
            }
          />
          {"  Description is required for this subgenre"}
        </label>
      </div>
      <div className="button-view">
        <button
          onClick={() => {
            setBookContext.setBook({
              ...bookContext.book,
              addNewSubgenre: false,
            });
            navigate("/sub-genre");
          }}
          className="prev-btn"
        >
          {"< Back"}
        </button>
        <button onClick={() => onNext()} className="next-btn">
          {"Next >"}
        </button>
      </div>
    </div>
  );
}
