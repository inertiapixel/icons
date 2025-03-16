import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldBoltIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shield-bolt-icon_svg__a)"
    >
      <path d="M13.34 20.566q-.653.255-1.341.434a12 12 0 0 1-8.5-15 12 12 0 0 0 8.5-3 12 12 0 0 0 8.5 3c.607 2.065.647 4.254.117 6.34M19 16l-2 3h4l-2 3" />
    </g>
    <defs>
      <clipPath id="shield-bolt-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShieldBoltIcon;
