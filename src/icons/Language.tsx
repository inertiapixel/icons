import * as React from "react";
import type { SVGProps } from "react";
const SvgLanguage = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#language_svg__a)"
    >
      <path d="M4 5h7M9 3v2c0 4.418-2.239 8-5 8" />
      <path d="M5 9c0 2.144 2.952 3.908 6.7 4M12 20l4-9 4 9M19.098 18h-6.2" />
    </g>
    <defs>
      <clipPath id="language_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLanguage;
