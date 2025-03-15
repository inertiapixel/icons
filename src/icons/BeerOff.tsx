import * as React from "react";
import type { SVGProps } from "react";
const SvgBeerOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#beer-off_svg__a)"
    >
      <path d="M7 7v1.111c0 1.242.29 2.467.845 3.578l.31.622A8 8 0 0 1 9 15.889V20h6v-4.111q0-.427.045-.85m.953-3.035.157-.315A8 8 0 0 0 17 8.111V4H8M7 8h1m4 0h5M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="beer-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBeerOff;
