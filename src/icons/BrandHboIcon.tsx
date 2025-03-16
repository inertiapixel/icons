import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandHboIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-hbo-icon_svg__a)"
    >
      <path d="M2 16V8M6 8v8M2 12h4M11 12a2 2 0 0 1 0 4H9V8h2a2 2 0 0 1 0 4m0 0H9M19 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
      <path d="M18 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    </g>
    <defs>
      <clipPath id="brand-hbo-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandHboIcon;
