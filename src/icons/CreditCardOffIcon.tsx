import * as React from "react";
import type { SVGProps } from "react";
const SvgCreditCardOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#credit-card-off-icon_svg__a)"
    >
      <path d="m3 3 18 18M9 5h9a3 3 0 0 1 3 3v8c0 .295-.043.588-.128.87M18.87 18.87A3 3 0 0 1 18 19H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 2.124-2.87M3 11h8M15 11h6M7 15h.01M11 15h2" />
    </g>
    <defs>
      <clipPath id="credit-card-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCreditCardOffIcon;
