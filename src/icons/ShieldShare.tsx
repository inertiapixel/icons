import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldShare = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#shield-share_svg__a)"
    >
      <path d="M11.999 21a12 12 0 0 1-8.5-15 12 12 0 0 0 8.5-3 12 12 0 0 0 8.5 3c.576 1.96.642 4.033.193 6.025M16 22l5-5M21 21.5V17h-4.5" />
    </g>
    <defs>
      <clipPath id="shield-share_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShieldShare;
