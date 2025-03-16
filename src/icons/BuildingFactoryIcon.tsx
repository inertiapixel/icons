import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildingFactoryIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#building-factory-icon_svg__a)"
    >
      <path d="M4 21c1.147-4.02 1.983-8.027 2-12h6c.017 3.973.853 7.98 2 12" />
      <path d="M12.5 13H17c.025 2.612.894 5.296 2 8M9 5a2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1M3 21h19" />
    </g>
    <defs>
      <clipPath id="building-factory-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBuildingFactoryIcon;
