import * as React from "react";
import type { SVGProps } from "react";
const SvgHorseToy = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#horse-toy_svg__a)"
    >
      <path d="M3.5 17.5q8.5 7 17 0" />
      <path d="M19 18.5 17 10l1-2 2 1 1.5-1.5L19 3c-5.052.218-5.99 3.133-7 6H6a3 3 0 0 0-3 3M5 18.5 7 9" />
      <path d="m8 20 2-5h4l2 5" />
    </g>
    <defs>
      <clipPath id="horse-toy_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHorseToy;
