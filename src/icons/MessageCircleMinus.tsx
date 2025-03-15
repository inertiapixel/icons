import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageCircleMinus = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#message-circle-minus_svg__a)"
    >
      <path d="M12.023 19.982a9.9 9.9 0 0 1-4.323-.98l-4.7 1 1.3-3.9C1.976 12.665 2.874 8.23 6.4 5.728c3.526-2.501 8.59-2.296 11.845.48 2.718 2.319 3.473 5.832 2.096 8.81M16 19h6" />
    </g>
    <defs>
      <clipPath id="message-circle-minus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMessageCircleMinus;
