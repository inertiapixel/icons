import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageCirclePauseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#message-circle-pause-icon_svg__a)"
    >
      <path d="M12.989 19.934a9.93 9.93 0 0 1-5.289-.932l-4.7 1 1.3-3.9C1.976 12.665 2.874 8.23 6.4 5.728c3.526-2.501 8.59-2.296 11.845.48 2.131 1.818 3.056 4.37 2.692 6.824M17 17v5M21 17v5" />
    </g>
    <defs>
      <clipPath id="message-circle-pause-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMessageCirclePauseIcon;
