import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandFigmaIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-figma-icon_svg__a)"
    >
      <path d="M12 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
      <path d="M6 6a3 3 0 0 1 3-3h6a3 3 0 0 1 0 6H9a3 3 0 0 1-3-3" />
      <path d="M9 9a3 3 0 1 0 0 6m0 0h3m-3 0a3 3 0 1 0 3 3V3" />
    </g>
    <defs>
      <clipPath id="brand-figma-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandFigmaIcon;
