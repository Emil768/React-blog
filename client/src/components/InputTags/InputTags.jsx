import React, { useState, createRef } from "react";

import "./InputTags.scss";
function InputTags() {
  const [tags, setTags] = useState(["React", "Мысли"]);
  const inputRef = createRef();

  const removeTag = (e, index) => {
    const tagsDel = tags.slice(0);
    tagsDel.splice(index, 1);
    setTags(tagsDel);
  };

  console.log(tags);

  const addTag = (e) => {
    const newTag = tags;
    const value = e.target.value;

    if (e.key === "Enter" && value) {
      if (newTag.find((tag) => tag.toLowerCase() === value.toLowerCase())) {
        return alert("No dublicated!");
      }
      newTag.push(value);
      setTags(newTag);
      inputRef.current.value = null;
    } else if (e.key === "Escape" && !value) {
      console.log("yes");
      removeTag(newTag.length - 1);
    }
  };
  console.log(tags);

  return (
    <div className="tags">
      <ul className="tags__list" tabIndex="0">
        {tags.map((tag, index) => {
          return (
            <li className="tags__list-item" key={index}>
              {tag}{" "}
              <button
                className="tags__list-btn"
                onClick={(e) => removeTag(e, index)}
              >
                +
              </button>
            </li>
          );
        })}
        <li className="tags__input">
          <input type="text" ref={inputRef} onKeyDown={addTag} autoFocus />
        </li>
      </ul>
    </div>
  );
}

export default InputTags;
