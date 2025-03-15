import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageCircleOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#message-circle-off_svg__a)"
    >
      <path d="M8.595 4.579c3.223-1.176 7.025-.61 9.65 1.63 2.982 2.543 3.601 6.523 1.636 9.66m-1.908 2.108c-2.787 2.19-6.89 2.666-10.273 1.024l-4.7 1 1.3-3.9c-2.229-3.295-1.494-7.51 1.68-10.056M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="message-circle-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMessageCircleOff;
