import { useState } from "react";

export function EachTodo({ todo, each }) {
  const [spoil, setSpoil] = useState(false);
  return (
    <div
      className={spoil ? "spoil" : ""}
      onClick={() => {
        setSpoil(!spoil);
        if (spoil)
          localStorage.setItem(
            "todo-list",
            todo.filter((t) => t !== each)
          );
        else {
          todo.push(each);
          localStorage.setItem("todo", JSON.stringify(todo));
        }
      }}
    >
      <p className="title">{each.title}</p>
      <p className="description">{each.description}</p>
    </div>
  );
}
