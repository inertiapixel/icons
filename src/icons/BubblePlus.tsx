import * as React from "react";
import type { SVGProps } from "react";
const SvgBubblePlus = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bubble-plus_svg__a)"
    >
      <path d="M12.398 19c-.537.003-1.07-.098-1.57-.297L6.998 21v-3.134a2.67 2.67 0 0 1-1.795-3.773A4.8 4.8 0 0 1 8.111 5.16a5.335 5.335 0 0 1 9.194 1.078 5.333 5.333 0 0 1 4.45 6.89M16 19h6M19 16v6" />
    </g>
    <defs>
      <clipPath id="bubble-plus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBubblePlus;
