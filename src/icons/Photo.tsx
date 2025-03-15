import * as React from "react";
import type { SVGProps } from "react";
const SvgPhoto = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#photo_svg__a)">
      <path
        fill="currentColor"
        d="M8.813 11.612c.457-.38.918-.38 1.386.011l.108.098 4.986 4.986.094.083a1 1 0 0 0 1.403-1.403l-.083-.094L15.415 14l.292-.293.106-.095c.457-.38.918-.38 1.386.011l.108.098 4.674 4.675a4 4 0 0 1-3.775 3.599L18 22H6a4 4 0 0 1-3.98-3.603l6.687-6.69zM18 2a4 4 0 0 1 3.995 3.8L22 6v9.585l-3.293-3.292-.15-.137c-1.256-1.095-2.85-1.097-4.096-.017l-.154.14-.307.306-2.293-2.292-.15-.137c-1.256-1.095-2.85-1.097-4.096-.017l-.154.14L2 15.585V6a4 4 0 0 1 3.8-3.995L6 2zm-2.99 5-.127.007a1 1 0 0 0 0 1.986L15 9l.127-.007a1 1 0 0 0 0-1.986z"
      />
    </g>
    <defs>
      <clipPath id="photo_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhoto;
