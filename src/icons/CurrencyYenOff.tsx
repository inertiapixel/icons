import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyYenOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-yen-off_svg__a)"
    >
      <path d="M12 19v-7m5-7-3.328 4.66M8 17h8M8 13h5M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="currency-yen-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyYenOff;
