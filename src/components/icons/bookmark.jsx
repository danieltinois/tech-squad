export function SaveIcon({ isHovered, ...rest }) {
  return (
    <svg
      width="14"
      height="18"
      viewBox="0 0 14 18"
      fill={isHovered ? "#3f8be4" : "#10100E"}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H12C12.55 0 13.0208 0.195833 13.4125 0.5875C13.8042 0.979167 14 1.45 14 2V18L7 15L0 18ZM2 14.95L7 12.8L12 14.95V2H2V14.95Z" />
    </svg>
  );
}