import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyDinarIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-dinar-icon_svg__a)"
    >
      <path d="M14 20.01V20M6 13l2.386-.9a1 1 0 0 0-.095-1.902l-1.514-.404a1 1 0 0 1-.102-1.9L9 7" />
      <path d="M3 14v1a3 3 0 0 0 3 3h4.161a3 3 0 0 0 2.983-3.32L12 4M16 17l1 1h2a2 2 0 0 0 1.649-3.131L17.996 11" />
    </g>
    <defs>
      <clipPath id="currency-dinar-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyDinarIcon;
