import * as React from "react";
import type { SVGProps } from "react";
const SvgTextGrammar = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#text-grammar_svg__a)"
    >
      <path d="M14 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0M4 12V7a3 3 0 0 1 6 0v5M4 9h6M20 6v6M4 16h12M4 20h6M14 20l2 2 5-5" />
    </g>
    <defs>
      <clipPath id="text-grammar_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTextGrammar;
