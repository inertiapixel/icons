import * as React from "react";
import type { SVGProps } from "react";
const SvgMathSymbolsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#math-symbols-icon_svg__a)"
    >
      <path d="M3 12h18M12 3v18M16.5 4.5l3 3M19.5 4.5l-3 3M6 4v4M4 6h4M18 16h.01M18 20h.01M4 18h4" />
    </g>
    <defs>
      <clipPath id="math-symbols-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMathSymbolsIcon;
