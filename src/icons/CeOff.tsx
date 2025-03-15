import * as React from "react";
import type { SVGProps } from "react";
const SvgCeOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ce-off_svg__a)"
    >
      <path d="M6.53 6.531A6.001 6.001 0 0 0 9 18.001M21.001 6a6 6 0 0 0-5.927 5.061l.927.939M16 12h5M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="ce-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCeOff;
