import * as React from "react";
import type { SVGProps } from "react";
const SvgRoadSignIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#road-sign-icon_svg__a)"
    >
      <path d="m13.446 2.6 7.955 7.954a2.045 2.045 0 0 1 0 2.892L13.446 21.4a2.045 2.045 0 0 1-2.892 0l-7.955-7.955a2.045 2.045 0 0 1 0-2.892l7.955-7.955a2.045 2.045 0 0 1 2.892 0" />
      <path d="M9 14v-2c0-.59.414-1 1-1h5" />
      <path d="m13 9 2 2-2 2" />
    </g>
    <defs>
      <clipPath id="road-sign-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRoadSignIcon;
