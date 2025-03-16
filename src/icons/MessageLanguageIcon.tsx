import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageLanguageIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#message-language-icon_svg__a)"
    >
      <path d="M4 21V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8z" />
      <path d="M10 14v-4a2 2 0 1 1 4 0v4M14 12h-4" />
    </g>
    <defs>
      <clipPath id="message-language-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMessageLanguageIcon;
