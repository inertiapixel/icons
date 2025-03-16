import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaneInflightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#plane-inflight-icon_svg__a)"
    >
      <path d="M15 11.086h5a2 2 0 0 1 0 4H5l-3-6h3l2 2h3l-2-7h3zM3 21h18" />
    </g>
    <defs>
      <clipPath id="plane-inflight-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlaneInflightIcon;
