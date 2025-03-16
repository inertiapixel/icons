import * as React from "react";
import type { SVGProps } from "react";
const SvgColorPickerOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#color-picker-off-icon_svg__a)"
    >
      <path d="m11 7 6 6M12 8l3.698-3.699a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-3.702 3.703m-2 2-6 6h-4v-4l6-6M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="color-picker-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgColorPickerOffIcon;
