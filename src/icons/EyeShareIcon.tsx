import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeShareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#eye-share-icon_svg__a)"
    >
      <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M12.597 17.981A10 10 0 0 1 12 18q-5.4 0-9-6 3.6-6 9-6t9 6q-.307.513-.63.983M16 22l5-5M21 21.5V17h-4.5" />
    </g>
    <defs>
      <clipPath id="eye-share-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEyeShareIcon;
