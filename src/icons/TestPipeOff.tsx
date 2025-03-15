import * as React from "react";
import type { SVGProps } from "react";
const SvgTestPipeOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#test-pipe-off_svg__a)"
    >
      <path d="M20 8.04A800 800 0 0 0 16 12m-2 2q-1.627 1.628-6.122 6.164a2.857 2.857 0 0 1-4.041-4.04C6.855 13.124 8.91 11.087 10 10m2-2q1.307-1.308 3.959-4M7 13h6M19.002 15l1.5 1.6m-.74 3.173a2 2 0 0 1-2.613-2.608M15 3l6 6M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="test-pipe-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTestPipeOff;
