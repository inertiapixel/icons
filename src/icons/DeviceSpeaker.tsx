import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceSpeaker = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#device-speaker_svg__a)"
    >
      <path d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
      <path d="M9 14a3 3 0 1 0 6 0 3 3 0 0 0-6 0M12 7v.01" />
    </g>
    <defs>
      <clipPath id="device-speaker_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDeviceSpeaker;
