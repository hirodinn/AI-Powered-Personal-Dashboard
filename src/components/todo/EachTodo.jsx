import { useState } from "react";

export function EachTodo({ each }) {
  const [spoil, setSpoil] = useState(false);
  return (
    <div
      className={spoil ? "spoil" : ""}
      onClick={() => {
        setSpoil(!spoil);
        if (!spoil) {
          localStorage.setItem(
            "todo",
            JSON.stringify(
              JSON.parse(localStorage.getItem("todo")).filter(
                (t) => t.id !== each.id
              )
            )
          );
          console.log("this is excuted");
        } else {
          localStorage.setItem(
            "todo",
            JSON.stringify([...JSON.parse(localStorage.getItem("todo")), each])
          );
        }
      }}
    >
      <p className="title">{each.title}</p>
    </div>
  );
}
