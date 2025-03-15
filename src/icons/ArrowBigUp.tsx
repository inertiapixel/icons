import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBigUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#arrow-big-up_svg__a)">
      <path
        fill="currentColor"
        d="M10.586 3 4 9.586a2 2 0 0 0-.434 2.18l.068.145A2 2 0 0 0 5.414 13H8v7a2 2 0 0 0 2 2h4l.15-.005A2 2 0 0 0 16 20v-7h2.586A1.999 1.999 0 0 0 20 9.586L13.414 3a2 2 0 0 0-2.828 0"
      />
    </g>
    <defs>
      <clipPath id="arrow-big-up_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowBigUp;
