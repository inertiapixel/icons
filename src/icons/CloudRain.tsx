import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudRain = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cloud-rain_svg__a)"
    >
      <path d="M7.001 18a4.82 4.82 0 0 1-3.326-1.319A4.4 4.4 0 0 1 2.297 13.5c0-1.193.496-2.338 1.378-3.182A4.82 4.82 0 0 1 7 9c.295-1.313 1.157-2.466 2.397-3.207a6 6 0 0 1 2.025-.749 6.2 6.2 0 0 1 2.19.006c.722.132 1.408.39 2.02.76.611.37 1.136.845 1.543 1.397.408.553.69 1.172.832 1.823.142.65.14 1.32-.007 1.97h1a3.5 3.5 0 0 1 0 7M11 13v2m0 3v2m4-5v2m0 3v2" />
    </g>
    <defs>
      <clipPath id="cloud-rain_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCloudRain;
