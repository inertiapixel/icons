import * as React from "react";
import type { SVGProps } from "react";
const SvgSendOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#send-off-icon_svg__a)"
    >
      <path d="m10 14 2-2m2-2 7-7M10.719 6.713 21 3l-3.715 10.289m-1.063 2.941L14.5 21a.551.551 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1l4.772-1.723M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="send-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSendOffIcon;
