import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceAudioTapeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#device-audio-tape-icon_svg__a)"
    >
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="m3 17 4-3h10l4 3" />
      <path
        fill="currentColor"
        d="M7.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M16.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      />
    </g>
    <defs>
      <clipPath id="device-audio-tape-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDeviceAudioTapeIcon;
