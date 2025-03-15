import * as React from "react";
import type { SVGProps } from "react";
const SvgUnderline = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#underline_svg__a)"
    >
      <path d="M7 5v5a5 5 0 1 0 10 0V5M5 19h14" />
    </g>
    <defs>
      <clipPath id="underline_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUnderline;
