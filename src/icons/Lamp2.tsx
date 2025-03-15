import * as React from "react";
import type { SVGProps } from "react";
const SvgLamp2 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#lamp-2_svg__a)"
    >
      <path d="M5 21h9M10 21l-7-8 8.5-5.5" />
      <path d="M13.002 14c-2.148-2.149-2.148-5.853 0-8 2.088-2.089 5.842-1.973 8 0z" />
      <path d="m11.742 7.574-1.156-1.156a2 2 0 1 1 2.828-2.829l1.144 1.144M15.5 11.999l.208.274a2.527 2.527 0 0 0 3.556 0c.939-.933.98-2.42.122-3.4l-.366-.37" />
    </g>
    <defs>
      <clipPath id="lamp-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLamp2;
