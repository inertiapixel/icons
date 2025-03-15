import * as React from "react";
import type { SVGProps } from "react";
const SvgPrismOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#prism-off_svg__a)"
    >
      <path d="M12 12v10M17.957 17.952l-4.937 3.703a1.7 1.7 0 0 1-2.04 0L5 17.17a2.5 2.5 0 0 1-1-2V4m3-1h12a1 1 0 0 1 1 1v11.17q0 .376-.109.729" />
      <path d="M12.688 8.7a1.7 1.7 0 0 0 .356-.213L19.7 3.3M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="prism-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPrismOff;
