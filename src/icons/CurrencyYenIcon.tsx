import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyYenIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-yen-icon_svg__a)"
    >
      <path d="M12 19v-7m0 0L7 5m5 7 5-7M8 17h8M8 13h8" />
    </g>
    <defs>
      <clipPath id="currency-yen-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyYenIcon;
