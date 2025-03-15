import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationBolt = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#location-bolt_svg__a)"
    >
      <path d="M13.05 20.1 10 14l-7-3.5a.55.55 0 0 1 0-1L21 3l-3.311 9.173M19 16l-2 3h4l-2 3" />
    </g>
    <defs>
      <clipPath id="location-bolt_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLocationBolt;
