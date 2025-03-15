import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandYahoo = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-yahoo_svg__a)"
    >
      <path d="M3 6h5M7 18h7M4.5 6l5.5 7v5M10 13l6-5M12.5 8h5M20 11v4M20 18v.01" />
    </g>
    <defs>
      <clipPath id="brand-yahoo_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandYahoo;
