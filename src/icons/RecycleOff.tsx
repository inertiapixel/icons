import * as React from "react";
import type { SVGProps } from "react";
const SvgRecycleOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#recycle-off_svg__a)"
    >
      <path d="m12 17-2 2m0 0 2 2m-2-2h9m1.896-2.071a2 2 0 0 0-.146-.679l-.55-1M8.536 11.002 7.804 8.27m0 0-2.732.732m2.732-.732-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141.023M15.463 11l2.732.733m0 0L18.927 9m-.732 2.732-4.5-7.794a2 2 0 0 0-3.256-.14l-.591.976M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="recycle-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRecycleOff;
