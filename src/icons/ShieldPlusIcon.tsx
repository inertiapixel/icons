import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldPlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shield-plus-icon_svg__a)"
    >
      <path d="M12.46 20.87q-.228.07-.461.13a12 12 0 0 1-8.5-15 12 12 0 0 0 8.5-3 12 12 0 0 0 8.5 3c.61 2.075.648 4.275.11 6.37M16 19h6M19 16v6" />
    </g>
    <defs>
      <clipPath id="shield-plus-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShieldPlusIcon;
