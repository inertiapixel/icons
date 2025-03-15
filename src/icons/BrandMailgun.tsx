import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandMailgun = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-mailgun_svg__a)"
    >
      <path d="M17 12a2 2 0 0 0 4 0 9 9 0 1 0-2.987 6.697" />
      <path d="M7 12a5 5 0 1 0 10 0 5 5 0 0 0-10 0" />
      <path d="M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      <path d="M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    </g>
    <defs>
      <clipPath id="brand-mailgun_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandMailgun;
