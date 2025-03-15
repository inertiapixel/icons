import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandGrammarly = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-grammarly_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
      <path d="M15.696 9.434a4.5 4.5 0 1 0 .217 4.788" />
      <path d="M13.5 14H16v2.5" />
    </g>
    <defs>
      <clipPath id="brand-grammarly_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandGrammarly;
