import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleKey1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#circle-key-1_svg__a)"
    >
      <path d="M12 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
      <path d="m12.5 11.5-4 4L10 17M12 15l-1.5-1.5" />
    </g>
    <defs>
      <clipPath id="circle-key-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircleKey1;
