import * as React from "react";
import type { SVGProps } from "react";
const SvgLuggageOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#luggage-off_svg__a)"
    >
      <path d="M10 6h6a2 2 0 0 1 2 2v6m0 4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8c0-.546.218-1.04.573-1.4M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M6 10h4m4 0h4M6 16h10M9 20v1M15 20v1M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="luggage-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLuggageOff;
