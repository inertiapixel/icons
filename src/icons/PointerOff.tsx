import * as React from "react";
import type { SVGProps } from "react";
const SvgPointerOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pointer-off_svg__a)"
    >
      <path d="m15.662 11.628 2.229-1.496a1.2 1.2 0 0 0-.309-2.228L9.569 5.601M4 4l3.904 13.563a1.2 1.2 0 0 0 2.228.308l2.09-3.093 4.907 4.907a1.066 1.066 0 0 0 1.509 0l.524-.524M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="pointer-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPointerOff;
