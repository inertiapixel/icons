import * as React from "react";
import type { SVGProps } from "react";
const SvgVipIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#vip-icon_svg__a)"
    >
      <path d="M3 5h18M3 19h18M4 9l2 6h1l2-6M12 9v6M16 15V9h2a2 2 0 0 1 0 4h-2" />
    </g>
    <defs>
      <clipPath id="vip-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVipIcon;
