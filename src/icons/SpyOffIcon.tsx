import * as React from "react";
import type { SVGProps } from "react";
const SvgSpyOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#spy-off-icon_svg__a)"
    >
      <path d="M3 11h8m4 0h6M5 11V7c0-.571.16-1.105.437-1.56M8 4h8a3 3 0 0 1 3 3v4M4 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0M14.88 14.878a2.998 2.998 0 0 0 .97 4.894 3 3 0 0 0 3.27-.647m.59-3.414a3 3 0 0 0-1.425-1.422M10 17h4M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="spy-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSpyOffIcon;
