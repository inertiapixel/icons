import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandCoreosIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-coreos-icon_svg__a)"
    >
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
      <path d="M12.001 3c-3.263 3.212-3 7.654-3 12 4.59.244 8.814-.282 12-3" />
      <path d="M9.5 9a4.494 4.494 0 0 1 5.5 5.5" />
    </g>
    <defs>
      <clipPath id="brand-coreos-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandCoreosIcon;
