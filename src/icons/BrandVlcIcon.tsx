import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandVlcIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-vlc-icon_svg__a)"
    >
      <path d="m13.79 4.337 3.1 9.305c.33.985-.112 2.07-1.02 2.499a9.15 9.15 0 0 1-7.741 0c-.907-.428-1.35-1.514-1.02-2.499l3.1-9.305c.267-.8.985-1.337 1.79-1.337.808 0 1.526.537 1.79 1.337" />
      <path d="M7 14H5.571a2 2 0 0 0-1.923 1.45l-.57 2A2 2 0 0 0 5 20h13.998a2 2 0 0 0 1.923-2.55l-.572-2A2 2 0 0 0 18.426 14H17" />
    </g>
    <defs>
      <clipPath id="brand-vlc-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandVlcIcon;
