import * as React from "react";
import type { SVGProps } from "react";
const SvgTextSpellcheck = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#text-spellcheck_svg__a)"
    >
      <path d="M5 15V7.5a3.5 3.5 0 1 1 7 0V15M5 10h7M10 18l3 3 7-7" />
    </g>
    <defs>
      <clipPath id="text-spellcheck_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTextSpellcheck;
