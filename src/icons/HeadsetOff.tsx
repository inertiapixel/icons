import * as React from "react";
import type { SVGProps } from "react";
const SvgHeadsetOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#headset-off_svg__a)"
    >
      <path d="M4 14.002v-3c0-1.953.7-3.742 1.862-5.13m2.182-1.825A8 8 0 0 1 20 11.002v3M18 19c0 1.657-2.686 3-6 3" />
      <path d="M4 14a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM16.169 12.18c.253-.115.534-.18.831-.18h1a2 2 0 0 1 2 2v2m-1.183 2.826c-.25.112-.526.174-.817.174h-1a2 2 0 0 1-2-2v-2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="headset-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeadsetOff;
