import * as React from "react";
import type { SVGProps } from "react";
const SvgRotate3DIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#rotate-3d-icon_svg__a)"
    >
      <path d="M12 3a7 7 0 0 1 7 7v4l-3-3M22 11l-3 3M8 15.5l-5-3 5-3 5 3V18l-5 3z" />
      <path d="M3 12.5V18l5 3M8 15.546l5-3.03" />
    </g>
    <defs>
      <clipPath id="rotate-3d-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRotate3DIcon;
