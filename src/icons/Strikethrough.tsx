import * as React from "react";
import type { SVGProps } from "react";
const SvgStrikethrough = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#strikethrough_svg__a)"
    >
      <path d="M5 12h14M16 6.501c-.227-.44-.746-.828-1.473-1.101S12.908 4.987 12 5.001h-1a3.5 3.5 0 1 0 0 7h2a3.5 3.5 0 0 1 0 7h-1.5c-.908.014-1.8-.126-2.527-.399s-1.246-.661-1.473-1.101" />
    </g>
    <defs>
      <clipPath id="strikethrough_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStrikethrough;
