import * as React from "react";
import type { SVGProps } from "react";
const SvgFocus2 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#focus-2_svg__a)"
    >
      <path fill="currentColor" d="M12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
      <path d="M5 12a7 7 0 1 0 14 0 7 7 0 0 0-14 0M12 3v2M3 12h2M12 19v2M19 12h2" />
    </g>
    <defs>
      <clipPath id="focus-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFocus2;
