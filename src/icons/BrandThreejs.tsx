import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandThreejs = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-threejs_svg__a)"
    >
      <path d="M8 22 3 3l19 5.5z" />
      <path d="m12.574 17.581-6.152-1.576 8.796-9.466 1.914 6.64" />
      <path d="M12.573 17.58 11 11l6.13 2.179" />
      <path d="m9.528 4.895 1.473 6.107-6.31-1.564z" />
    </g>
    <defs>
      <clipPath id="brand-threejs_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandThreejs;
