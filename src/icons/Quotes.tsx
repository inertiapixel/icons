import * as React from "react";
import type { SVGProps } from "react";
const SvgQuotes = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#quotes_svg__a)"
    >
      <path d="M4 12c-1.333-1.854-1.333-4.146 0-6M8 12c-1.333-1.854-1.333-4.146 0-6M16 18c1.333-1.854 1.333-4.146 0-6M20 18c1.333-1.854 1.333-4.146 0-6" />
    </g>
    <defs>
      <clipPath id="quotes_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgQuotes;
