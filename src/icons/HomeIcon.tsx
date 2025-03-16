import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#home-icon_svg__a)">
      <path
        fill="currentColor"
        d="m12.709 2.293 9 9c.63.63.184 1.707-.707 1.707h-1v6a3 3 0 0 1-3 3h-1v-7a3 3 0 0 0-2.824-2.995L13.002 12h-2a3 3 0 0 0-3 3v7h-1a3 3 0 0 1-3-3v-6h-1c-.89 0-1.337-1.077-.707-1.707l9-9a1 1 0 0 1 1.414 0M13.002 14a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883-.993l.117-.007z"
      />
    </g>
    <defs>
      <clipPath id="home-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHomeIcon;
