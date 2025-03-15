import * as React from "react";
import type { SVGProps } from "react";
const SvgLanguageHiragana = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#language-hiragana_svg__a)"
    >
      <path d="M4 5h7M7 4c0 4.846 0 7 .5 8" />
      <path d="M10 8.5c0 2.286-2 4.5-3.5 4.5S4 11.865 4 11q0-3 3-3c2 0 5 .57 5 2.857q0 2.286-2 3.143M12 20l4-9 4 9M19.098 18h-6.2" />
    </g>
    <defs>
      <clipPath id="language-hiragana_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLanguageHiragana;
