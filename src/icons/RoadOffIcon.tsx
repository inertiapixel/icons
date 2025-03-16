import * as React from "react";
import type { SVGProps } from "react";
const SvgRoadOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#road-off-icon_svg__a)"
    >
      <path d="M4 19 7.332 7.34M16 5l2.806 9.823M12 8V6M12 13v-1M12 18v-2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="road-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRoadOffIcon;
