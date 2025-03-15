import * as React from "react";
import type { SVGProps } from "react";
const SvgBoltOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bolt-off_svg__a)"
    >
      <path d="m3 3 18 18M15.212 15.21 11 21v-7H5l3.79-5.21m1.685-2.32L13 3v6m1 1h5l-2.104 2.893" />
    </g>
    <defs>
      <clipPath id="bolt-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBoltOff;
