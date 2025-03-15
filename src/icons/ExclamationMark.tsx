import * as React from "react";
import type { SVGProps } from "react";
const SvgExclamationMark = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#exclamation-mark_svg__a)"
    >
      <path d="M12 19v.01M12 15V5" />
    </g>
    <defs>
      <clipPath id="exclamation-mark_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgExclamationMark;
