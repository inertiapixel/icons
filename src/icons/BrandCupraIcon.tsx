import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandCupraIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-cupra-icon_svg__a)"
    >
      <path d="M4.5 10 2 6l15.298 6.909a.2.2 0 0 1 .09.283L14 19" />
      <path d="m10.001 19-3.388-5.808a.2.2 0 0 1 .09-.283L22.001 6l-2.5 4" />
    </g>
    <defs>
      <clipPath id="brand-cupra-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandCupraIcon;
