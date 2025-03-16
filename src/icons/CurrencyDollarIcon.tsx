import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyDollarIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-dollar-icon_svg__a)"
    >
      <path d="M16.7 8A3 3 0 0 0 14 6h-4a3 3 0 1 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1-2.7-2M12 3v3m0 12v3" />
    </g>
    <defs>
      <clipPath id="currency-dollar-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyDollarIcon;
