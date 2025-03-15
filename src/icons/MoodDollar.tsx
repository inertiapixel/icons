import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodDollar = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mood-dollar_svg__a)"
    >
      <path d="M20.87 10.48a9 9 0 1 0-7.875 10.465M9 10h.01M15 10h.01" />
      <path d="M9.5 15c.658.64 1.56 1 2.5 1 .357 0 .709-.052 1.043-.151M21 15h-2.5a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 1 1 0 3H17M19 21v1m0-8v1" />
    </g>
    <defs>
      <clipPath id="mood-dollar_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoodDollar;
