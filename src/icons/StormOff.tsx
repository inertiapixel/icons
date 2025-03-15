import * as React from "react";
import type { SVGProps } from "react";
const SvgStormOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#storm-off_svg__a)"
    >
      <path d="M9.884 9.874a3 3 0 1 0 4.24 4.246m.57-3.44a3 3 0 0 0-1.41-1.39" />
      <path d="M7.039 7.063a7 7 0 1 0 9.907 9.892m1.585-2.426A7 7 0 0 0 9.473 5.47" />
      <path d="M5.37 14.236c-1.606-3.428-1.598-6.673-1-9.85M18.629 9.762a14.3 14.3 0 0 1 1.368 6.25m-.37 3.609q-.132.69-.295 1.377M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="storm-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStormOff;
