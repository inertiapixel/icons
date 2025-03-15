import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyDram = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-dram_svg__a)"
    >
      <path d="M4 10a6 6 0 1 1 12 0v10M12 16h8M12 12h8" />
    </g>
    <defs>
      <clipPath id="currency-dram_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyDram;
