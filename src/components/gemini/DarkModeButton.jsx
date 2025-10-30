import "./DarkModeButton.css";
export function DarkModeButton({ isDark, setIsDark }) {
  return (
    <button
      className="dark-mode-button"
      onClick={() => {
        setIsDark(!isDark);
      }}
    >
      {isDark ? (
        <i
          class="fa-solid fa-sun"
          style={{ color: "rgba(231, 202, 148, 1)" }}
        ></i>
      ) : (
        <i class="fa-solid fa-moon"></i>
      )}
    </button>
  );
}
