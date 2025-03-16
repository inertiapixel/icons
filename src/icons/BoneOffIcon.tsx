import * as React from "react";
import type { SVGProps } from "react";
const SvgBoneOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bone-off-icon_svg__a)"
    >
      <path d="m12.5 8.503.38-.38A3 3 0 1 1 18 6a3 3 0 1 1-2.12 5.122l-.373.372M13.5 13.503l-2.378 2.378a3 3 0 1 1-5.117 2.297V18h-.176a3 3 0 1 1 2.298-5.115l2.378-2.378M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="bone-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBoneOffIcon;
