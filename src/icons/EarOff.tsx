import * as React from "react";
import type { SVGProps } from "react";
const SvgEarOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ear-off_svg__a)"
    >
      <path d="M6 10.002c0-1.146.277-2.245.78-3.22m1.792-2.207A7 7 0 0 1 19 13.6q-.298.398-.633.762m-2.045 1.96A8 8 0 0 0 15 18.603a4.5 4.5 0 0 1-6.8 1.4" />
      <path d="M11.422 7.415a3 3 0 0 1 4.13 4.13M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="ear-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEarOff;
