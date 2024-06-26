export function LikeIcon({ isHovered, ...rest }) {
  return (
    <svg viewBox="0 0 256 256" width="24" height="24">
      <rect fill="none" height="256" width="256"></rect>
      <path
        d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
        strokeWidth="20px"
        stroke={isHovered ? "#3f8be4" : "#10100E"}
        fill="none"
      ></path>
    </svg>
  );
}
