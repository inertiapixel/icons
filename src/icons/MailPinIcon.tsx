import * as React from "react";
import type { SVGProps } from "react";
const SvgMailPinIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mail-pin-icon_svg__a)"
    >
      <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4.5M21.121 20.122a3 3 0 1 0-4.242 0Q17.506 20.75 19 22q1.577-1.334 2.121-1.88M19 18v.01" />
      <path d="m3 7 9 6 9-6" />
    </g>
    <defs>
      <clipPath id="mail-pin-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMailPinIcon;
