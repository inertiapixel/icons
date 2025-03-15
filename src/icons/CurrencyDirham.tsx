import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyDirham = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-dirham_svg__a)"
    >
      <path d="M8.5 19H5M8.599 16.479A1.5 1.5 0 1 0 7.499 19M7 4v9M15 13h1.888a1.5 1.5 0 0 0 1.296-2.256L16 7M11 13.01V13" />
    </g>
    <defs>
      <clipPath id="currency-dirham_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyDirham;
