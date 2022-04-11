import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

import "../App.css";
import { BookContext } from "../helper/Context";

export default function StepView() {
  const bookContext = useContext(BookContext);
  const location = useLocation();

  return (
    <div className="step">
      <div className="step-view-container">
        <div
          className={
            "step-view " + (location.pathname == "/" ? "active-view" : "")
          }
        >
          <h3 className={location.pathname == "/" ? "active" : ""}>1</h3>
        </div>
        <span className="step-title">Genre</span>
      </div>
      <div className="step-hr" />
      <div className="step-view-container">
        <div
          className={
            "step-view " +
            (location.pathname == "/sub-genre" ? "active-view" : "")
          }
        >
          <h3 className={location.pathname == "/sub-genre" ? "active" : ""}>
            2
          </h3>
        </div>
        <span className="step-title">Subgenre</span>
      </div>
      <div className="step-hr" />
      {location.pathname.startsWith("/add-new-subgenre") ||
      location.pathname.startsWith("/information") ? (
        <>
          {bookContext.book.addNewSubgenre ? (
            <>
              <div className="step-view-container">
                <div
                  className={
                    "step-view " +
                    (location.pathname == "/add-new-subgenre"
                      ? "active-view"
                      : "")
                  }
                >
                  <h3
                    className={
                      location.pathname == "/add-new-subgenre" ? "active" : ""
                    }
                  >
                    3
                  </h3>
                </div>
                <span className="step-title">Add new subgenre</span>
              </div>
              <div className="step-hr" />
            </>
          ) : null}

          <div className="step-view-container">
            <div
              className={
                "step-view " +
                (location.pathname == "/information" ? "active-view" : "")
              }
            >
              <h3
                className={location.pathname == "/information" ? "active" : ""}
              >
                {bookContext.book.addNewSubgenre ? 4 : 3}
              </h3>
            </div>
            <span className="step-title">Information</span>
          </div>
        </>
      ) : (
        <div className="step-view-container">
          <div className="step-view">
            <h3>...</h3>
          </div>
        </div>
      )}
    </div>
  );
}
