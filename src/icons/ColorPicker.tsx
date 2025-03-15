import * as React from "react";
import type { SVGProps } from "react";
const SvgColorPicker = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#color-picker_svg__a)"
    >
      <path d="m11 7 6 6M4 16.002l11.7-11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4L8 20.001H4z" />
    </g>
    <defs>
      <clipPath id="color-picker_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgColorPicker;
