import * as React from "react";
import type { SVGProps } from "react";
const SvgPasswordUserIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#password-user-icon_svg__a)"
    >
      <path d="M12 17v4M10 20l4-2M10 18l4 2M5 17v4M3 20l4-2M3 18l4 2M19 17v4M17 20l4-2M17 18l4 2M9 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0M7 14a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2" />
    </g>
    <defs>
      <clipPath id="password-user-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPasswordUserIcon;
