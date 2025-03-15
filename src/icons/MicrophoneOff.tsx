import * as React from "react";
import type { SVGProps } from "react";
const SvgMicrophoneOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#microphone-off_svg__a)"
    >
      <path d="m3 3 18 18M9 5a3 3 0 1 1 6 0v5c0 .296-.044.59-.13.874m-2 2A3 3 0 0 1 9 10.002v-1" />
      <path d="M5 10a7 7 0 0 0 10.846 5.85m2-2A6.97 6.97 0 0 0 18.998 10M8 21h8M12 17v4" />
    </g>
    <defs>
      <clipPath id="microphone-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMicrophoneOff;
