import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shield-down-icon_svg__a)"
    >
      <path d="M12.443 20.876q-.22.066-.444.124a12 12 0 0 1-8.5-15 12 12 0 0 0 8.5-3 12 12 0 0 0 8.5 3 12 12 0 0 1 .117 6.343M19 16v6M22 19l-3 3-3-3" />
    </g>
    <defs>
      <clipPath id="shield-down-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShieldDownIcon;
