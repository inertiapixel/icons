import * as React from "react";
import type { SVGProps } from "react";
const SvgBubbleX = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bubble-x_svg__a)"
    >
      <path d="M13.498 18.75c-.345.09-.727.25-1.1.25-.537 0-1.07-.1-1.57-.297L6.998 21v-3.134a2.67 2.67 0 0 1-1.795-3.773A4.8 4.8 0 0 1 8.111 5.16a5.335 5.335 0 0 1 9.194 1.078 5.333 5.333 0 0 1 4.484 6.778M22 22l-5-5M17 22l5-5" />
    </g>
    <defs>
      <clipPath id="bubble-x_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBubbleX;
