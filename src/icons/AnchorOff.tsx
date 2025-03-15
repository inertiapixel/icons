import * as React from "react";
import type { SVGProps } from "react";
const SvgAnchorOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#anchor-off_svg__a)"
    >
      <path d="M12 12v9M4 13a8 8 0 0 0 14.138 5.13m1.44-2.56A8 8 0 0 0 20 13M21 13h-2M5 13H3M12.866 8.872a3 3 0 1 0-3.737-3.747M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="anchor-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAnchorOff;
