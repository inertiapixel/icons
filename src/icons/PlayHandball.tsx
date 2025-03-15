import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayHandball = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#play-handball_svg__a)"
    >
      <path d="m13 21 3.5-2-4.5-4 2-4.5" />
      <path d="m7 6 2 4 5 .5 4 2.5 2.5 3M4 20l5-1 1.5-2M15 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      <path fill="currentColor" d="M9.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
    </g>
    <defs>
      <clipPath id="play-handball_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlayHandball;
