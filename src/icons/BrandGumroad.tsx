import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandGumroad = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-gumroad_svg__a)"
    >
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
      <path d="M13.5 13H16v3" />
      <path d="M15.024 9.382A4 4 0 1 0 12 16c1.862 0 2.554-1.278 3-3" />
    </g>
    <defs>
      <clipPath id="brand-gumroad_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandGumroad;
