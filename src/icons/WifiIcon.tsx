import * as React from "react";
import type { SVGProps } from "react";
const SvgWifiIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#wifi-icon_svg__a)"
    >
      <path d="M12 18h.01M9.172 15.171a4 4 0 0 1 5.656 0M6.344 12.343a8 8 0 0 1 11.314 0" />
      <path d="M3.516 9.515c4.686-4.687 12.284-4.687 17 0" />
    </g>
    <defs>
      <clipPath id="wifi-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWifiIcon;
