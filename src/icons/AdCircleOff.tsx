import * as React from "react";
import type { SVGProps } from "react";
const SvgAdCircleOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ad-circle-off_svg__a)"
    >
      <path d="M4.91 4.95A9.97 9.97 0 0 0 2 12c0 5.523 4.477 10 10 10a9.97 9.97 0 0 0 7.05-2.909M20.777 16.793A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10-1.74 0-3.376.444-4.8 1.225" />
      <path d="M7 15v-4.5a1.5 1.5 0 0 1 2.138-1.358M9.855 9.852c.094.196.146.415.146.647v4.5M7 13h3M14 14v1h1M17 13v-2a2 2 0 0 0-2-2h-1v1M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="ad-circle-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAdCircleOff;
