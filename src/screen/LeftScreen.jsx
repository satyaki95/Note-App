import React from "react";
import "./leftScreen.scss";
import { v4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function LeftScreen() {
  const obj = [
    { id: v4(), icon: "MN", name: "My Notes" },
    { id: v4(), icon: "MN", name: "My Notes" },
    { id: v4(), icon: "MN", name: "My Notes" },
    { id: v4(), icon: "MN", name: "My Notes" },
    { id: v4(), icon: "MN", name: "My Notes" },
    { id: v4(), icon: "MN", name: "My Notes" },
    { id: v4(), icon: "MN", name: "My Notes" },
    { id: v4(), icon: "MN", name: "My Notes" },
    { id: v4(), icon: "MN", name: "My Notes" },
    { id: v4(), icon: "MN", name: "My Notes" },
    { id: v4(), icon: "MN", name: "My Notes" },
    { id: v4(), icon: "MN", name: "My Notes" },
    { id: v4(), icon: "MN", name: "My Notes" },
    { id: v4(), icon: "MN", name: "My Notes" },
    { id: v4(), icon: "MN", name: "My Notes" },
    { id: v4(), icon: "MN", name: "My Notes" },
    { id: v4(), icon: "MN", name: "My Notes" },
    { id: v4(), icon: "MN", name: "My Notes" },
    { id: v4(), icon: "MN", name: "My Notes" },
  ];
  return (
    <div className="left-screen_container">
      <div className="left-screen__header">Pocket Notes</div>
      <div className="left-screen__content" id="left-screen__content">
        {obj.map((item) => {
          return (
            <div>
              <div id={item.id} className="left-screen_note_content">
              <button className="left-screen_btn">{item.icon}</button>
              <p className="left-screen_note_name">{item.name}</p>
            </div>
            </div>
          );
        })}
      </div>
      <button className="left-screen_add_btn">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}

export default LeftScreen;
