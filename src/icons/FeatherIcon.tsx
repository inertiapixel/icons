import * as React from "react";
import type { SVGProps } from "react";
const SvgFeatherIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#feather-icon_svg__a)"
    >
      <path d="m4 20 10-10m0 0V5l-4 4m4 1h5m-9-1v5h5m-5-5-4 4v5h5" />
      <path d="M14 5c.636-.633 1.513-1 2.483-1A3.515 3.515 0 0 1 20 7.514c0 .971-.362 1.85-1 2.486l-4 4-4 4" />
    </g>
    <defs>
      <clipPath id="feather-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFeatherIcon;
