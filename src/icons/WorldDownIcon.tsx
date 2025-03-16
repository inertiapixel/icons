import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#world-down-icon_svg__a)"
    >
      <path d="M20.986 12.508a8.999 8.999 0 1 0-8.455 8.476M3.602 9h16.8M3.602 15h10.9" />
      <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3c2.313 3.706 3.07 7.857 2.27 12M19 16v6M22 19l-3 3-3-3" />
    </g>
    <defs>
      <clipPath id="world-down-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWorldDownIcon;
