import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceMobileShare = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#device-mobile-share_svg__a)"
    >
      <path d="M12 21H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8M11 4h2M16 22l5-5M21 21.5V17h-4.5M12 17v.01" />
    </g>
    <defs>
      <clipPath id="device-mobile-share_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDeviceMobileShare;
