import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyAfghani = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-afghani_svg__a)"
    >
      <path d="M15 13h-3.5A3.5 3.5 0 1 1 15 9.5V16H8M12 3v.01M12 19v2" />
    </g>
    <defs>
      <clipPath id="currency-afghani_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyAfghani;
