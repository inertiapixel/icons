import * as React from "react";
import type { SVGProps } from "react";
const SvgDropletOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#droplet-off_svg__a)"
    >
      <path d="M18.963 14.94a6.54 6.54 0 0 0-.899-4.06l-4.89-7.26c-.42-.626-1.287-.804-1.936-.398a1.4 1.4 0 0 0-.41.397l-1.282 1.9M7.921 7.934 5.935 10.88C4.24 13.717 4.9 17.32 7.502 19.425s6.395 2.105 8.996 0a6.8 6.8 0 0 0 1.376-1.5M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="droplet-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDropletOff;
