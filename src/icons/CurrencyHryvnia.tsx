import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyHryvnia = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-hryvnia_svg__a)"
    >
      <path d="M7.998 7a2.64 2.64 0 0 1 2.562-2h3.376a2.64 2.64 0 0 1 2.562 2 2.57 2.57 0 0 1-1.344 2.922L9.278 12.86a3.34 3.34 0 0 0-1.78 3.64 3.11 3.11 0 0 0 3.05 2.5h2.888a2.64 2.64 0 0 0 2.562-2M6 10h12M6 14h12" />
    </g>
    <defs>
      <clipPath id="currency-hryvnia_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyHryvnia;
