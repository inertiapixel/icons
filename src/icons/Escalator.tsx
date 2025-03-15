import * as React from "react";
import type { SVGProps } from "react";
const SvgEscalator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#escalator_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.5 5h-2.672a2 2 0 0 0-1.414.586L7 14H4.5a2.5 2.5 0 0 0 0 5h3.672a2 2 0 0 0 1.414-.586L18 10h1.5a2.5 2.5 0 0 0 0-5"
      />
    </g>
    <defs>
      <clipPath id="escalator_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEscalator;
