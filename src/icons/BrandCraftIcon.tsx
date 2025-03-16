import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandCraftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-craft-icon_svg__a)"
    >
      <path d="M20 4h-8a8 8 0 1 0 0 16h8a8 8 0 0 0-8-8 8 8 0 0 0 8-8M4 12h8M12 4v16" />
    </g>
    <defs>
      <clipPath id="brand-craft-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandCraftIcon;
