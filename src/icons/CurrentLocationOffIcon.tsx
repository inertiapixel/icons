import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrentLocationOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#current-location-off-icon_svg__a)"
    >
      <path d="M14.685 10.66c-.3-.6-.796-1.087-1.402-1.375m-3.397.584a3 3 0 1 0 4.24 4.245" />
      <path d="M6.356 6.33a8 8 0 1 0 11.301 11.326m1.642-2.378A8 8 0 0 0 8.702 4.709M12 2v2M12 20v2M20 12h2M2 12h2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="current-location-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrentLocationOffIcon;
