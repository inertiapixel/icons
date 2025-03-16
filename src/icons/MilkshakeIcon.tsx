import * as React from "react";
import type { SVGProps } from "react";
const SvgMilkshakeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#milkshake-icon_svg__a)"
    >
      <path d="M17 10a5 5 0 0 0-10 0M6 11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zM7 13l1.81 7.243a1 1 0 0 0 .97.757h4.44a1 1 0 0 0 .97-.757L17 13M12 5V3" />
    </g>
    <defs>
      <clipPath id="milkshake-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMilkshakeIcon;
