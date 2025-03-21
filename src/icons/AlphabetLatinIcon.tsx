import * as React from "react";
import type { SVGProps } from "react";
const SvgAlphabetLatinIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#alphabet-latin-icon_svg__a)"
    >
      <path d="M6 10h2a2 2 0 0 1 2 2v5H7a2 2 0 1 1 0-4h3M14 7v10M14 12a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2z" />
    </g>
    <defs>
      <clipPath id="alphabet-latin-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlphabetLatinIcon;
