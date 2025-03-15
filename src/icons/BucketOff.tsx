import * as React from "react";
import type { SVGProps } from "react";
const SvgBucketOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bucket-off_svg__a)"
    >
      <path d="M5.029 5.036C4.374 5.616 4 6.286 4 7c0 2.033 3.033 3.712 6.96 3.967m3.788-.21C17.812 10.198 20 8.728 20 7c0-2.21-3.582-4-8-4-1.605 0-3.1.236-4.352.643" />
      <path d="M4 7c0 .664.088 1.324.263 1.965L7 19c.5 1.5 2.239 2 5 2s4.5-.5 5-2q.15-.45.457-1.535m.862-3.146q.393-1.463 1.418-5.354A7.5 7.5 0 0 0 20 7M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="bucket-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBucketOff;
