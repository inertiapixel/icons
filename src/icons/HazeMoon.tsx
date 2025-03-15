import * as React from "react";
import type { SVGProps } from "react";
const SvgHazeMoon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#haze-moon_svg__a)"
    >
      <path d="M3 16h18M3 20h18M8.296 16c-2.268-1.4-3.598-4.087-3.237-6.916.443-3.48 3.308-6.083 6.698-6.084v.006h.296c-1.991 1.916-2.377 5.03-.918 7.405s4.346 3.33 6.865 2.275A6.9 6.9 0 0 1 15.223 16" />
    </g>
    <defs>
      <clipPath id="haze-moon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHazeMoon;
