import * as React from "react";
import type { SVGProps } from "react";
const SvgBread = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#bread_svg__a)">
      <path
        fill="currentColor"
        d="M18 3a4 4 0 0 1 3.11 6.516l-.11.126V18a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-3-3V9.644l-.116-.136a4 4 0 0 1-.728-3.616l.067-.21c.532-1.525 1.93-2.58 3.601-2.677l12.08.001z"
      />
    </g>
    <defs>
      <clipPath id="bread_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBread;
