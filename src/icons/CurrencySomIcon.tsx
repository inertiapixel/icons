import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencySomIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-som-icon_svg__a)"
    >
      <path d="M10 18V6H5v10a2 2 0 0 1-2 2M18 12a3 3 0 0 1 0 6h-4V6h4a3 3 0 0 1 0 6m0 0h-4" />
    </g>
    <defs>
      <clipPath id="currency-som-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencySomIcon;
