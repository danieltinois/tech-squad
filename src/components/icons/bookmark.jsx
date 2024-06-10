export function SaveIcon({ isHovered, ...rest }) {
  return (
    <svg
      width="15"
      viewBox="0 0 50 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="svgIcon"
    >
      <path
        d="M46 62.0085L46 3.88139L3.99609 3.88139L3.99609 62.0085L24.5 45.5L46 62.0085Z"
        stroke={isHovered ? "#3f8be4" : "#10100E"}
        strokeWidth="5"
        fill="none"
      ></path>
    </svg>
  );
}
