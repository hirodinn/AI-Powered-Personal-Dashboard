import { useState } from "react";

export function EachTodo({ todo, each }) {
  const [spoil, setSpoil] = useState(false);
  return (
    <div
      className={spoil ? "spoil" : ""}
      onClick={() => {
        setSpoil(!spoil);
        if (!spoil) {
          localStorage.setItem(
            "todo",
            JSON.stringify(todo.filter((t) => t !== each))
          );
          console.log("this is excuted");
        } else {
          localStorage.setItem("todo", JSON.stringify(todo));
        }
      }}
    >
      <p className="title">{each.title}</p>
      <p className="description">{each.description}</p>
    </div>
  );
}
