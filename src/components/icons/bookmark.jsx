export function SaveIcon({ isHovered, ...rest }) {
  return (
    // <svg
    //   width="14"
    //   height="18"
    //   viewBox="0 0 14 18"
    //   fill={isHovered ? "#3f8be4" : "#10100E"}
    //   xmlns="http://www.w3.org/2000/svg"
    //   {...rest}
    // >
    //   <path d="M0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H12C12.55 0 13.0208 0.195833 13.4125 0.5875C13.8042 0.979167 14 1.45 14 2V18L7 15L0 18ZM2 14.95L7 12.8L12 14.95V2H2V14.95Z" />
    // </svg>

    <svg
      width="15"
      viewBox="0 0 50 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="svgIcon"
    >
      <path
        d="M46 62.0085L46 3.88139L3.99609 3.88139L3.99609 62.0085L24.5 45.5L46 62.0085Z"
        stroke={isHovered ? "#3f8be4" : "#10100E"}
        stroke-width="7"
        fill="none"
      ></path>
    </svg>
  );
}
