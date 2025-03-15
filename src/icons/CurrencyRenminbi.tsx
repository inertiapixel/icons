import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyRenminbi = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-renminbi_svg__a)"
    >
      <path d="M15 9v8a2 2 0 0 0 4 0M19 9H5M19 5H5M9 9v4c0 2.5-.667 4-2 6" />
    </g>
    <defs>
      <clipPath id="currency-renminbi_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyRenminbi;
