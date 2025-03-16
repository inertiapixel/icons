import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceSpeakerOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#device-speaker-off-icon_svg__a)"
    >
      <path d="M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5" />
      <path d="M11.112 11.133a3 3 0 1 0 3.754 3.75M12 7v.01M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="device-speaker-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDeviceSpeakerOffIcon;
