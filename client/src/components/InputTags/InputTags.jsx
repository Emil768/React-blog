import React, { useState, createRef } from "react";

import "./InputTags.scss";

function InputTags({ setState, tagValue }) {
  const [tags, setTags] = useState(["React", "Vue"]);

  const inputRef = createRef();

  const removeTag = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const addTag = (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && value) {
      setTags((state) => [...state, value]);
      inputRef.current.value = null;
    } else if (e.keyCode === "27" && !value) {
      console.log("yes");
      // removeTag(newTag.length - 1);
    }
  };

  return (
    <div className="tags">
      <ul className="tags__list" tabIndex="0">
        {tags.map((tag, index) => {
          return (
            <li className="tags__list-item" key={index}>
              {tag}{" "}
              <button
                className="tags__list-btn"
                onClick={() => removeTag(index)}
              >
                +
              </button>
            </li>
          );
        })}
        <li className="tags__input">
          <input
            type="text"
            ref={inputRef}
            onKeyDown={addTag}
            autoFocus
            onChange={(e) => setState(e.target.value)}
            defaultValue={tagValue}
          />
        </li>
      </ul>
    </div>
  );
}

export default InputTags;
