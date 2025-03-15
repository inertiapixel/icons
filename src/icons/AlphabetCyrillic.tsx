import * as React from "react";
import type { SVGProps } from "react";
const SvgAlphabetCyrillic = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#alphabet-cyrillic_svg__a)"
    >
      <path d="M6 10h2a2 2 0 0 1 2 2v5H7a2 2 0 1 1 0-4h3M19 7h-3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-3" />
    </g>
    <defs>
      <clipPath id="alphabet-cyrillic_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlphabetCyrillic;
