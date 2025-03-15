import * as React from "react";
import type { SVGProps } from "react";
const SvgFishOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#fish-off_svg__a)"
    >
      <path d="M16.689 7.441a6.97 6.97 0 0 0-1.63 3.635" />
      <path d="M2 9.503c5.307 5.948 10.293 8.57 14.597 7.1m2.583-1.449c.988-.788 1.93-1.836 2.82-3.153-3-4.443-6.596-5.812-10.564-4.548M8.672 8.72C6.527 9.985 4.294 11.934 2 14.505M18 11v.01M11.153 11.168q-.43 1.165.347 2.331M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="fish-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFishOff;
