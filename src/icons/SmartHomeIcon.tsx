import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartHomeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#smart-home-icon_svg__a)"
    >
      <path d="m19.001 8.71-5.333-4.148a2.666 2.666 0 0 0-3.274 0L5.06 8.71a2.67 2.67 0 0 0-1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.2c0-.823-.38-1.6-1.03-2.105" />
      <path d="M16 15c-2.21 1.333-5.792 1.333-8 0" />
    </g>
    <defs>
      <clipPath id="smart-home-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSmartHomeIcon;
