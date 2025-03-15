import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageCircleUp = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#message-circle-up_svg__a)"
    >
      <path d="M12.004 19.982a9.9 9.9 0 0 1-4.304-.98l-4.7 1 1.3-3.9C1.976 12.665 2.874 8.23 6.4 5.728c3.526-2.501 8.59-2.296 11.845.48 1.994 1.7 2.932 4.045 2.746 6.349M19 22v-6M22 19l-3-3-3 3" />
    </g>
    <defs>
      <clipPath id="message-circle-up_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMessageCircleUp;
