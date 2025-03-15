import * as React from "react";
import type { SVGProps } from "react";
const SvgStackFront = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#stack-front_svg__a)"
    >
      <path fill="currentColor" d="M12 4 4 8l8 4 8-4z" />
      <path d="m8 14-4 2 8 4 8-4-4-2" />
      <path d="m8 10-4 2 8 4 8-4-4-2" />
    </g>
    <defs>
      <clipPath id="stack-front_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStackFront;
