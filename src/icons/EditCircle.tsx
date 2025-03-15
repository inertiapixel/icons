import * as React from "react";
import type { SVGProps } from "react";
const SvgEditCircle = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#edit-circle_svg__a)"
    >
      <path d="m12 15 8.385-8.415a2.1 2.1 0 0 0-2.97-2.97L9 12v3zM16 5l3 3" />
      <path d="M9 7.07A7 7 0 0 0 10 21a7 7 0 0 0 6.93-6" />
    </g>
    <defs>
      <clipPath id="edit-circle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEditCircle;
