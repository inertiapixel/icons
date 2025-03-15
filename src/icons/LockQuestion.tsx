import * as React from "react";
import type { SVGProps } from "react";
const SvgLockQuestion = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#lock-question_svg__a)"
    >
      <path d="M15 21H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h10c.265 0 .518.052.75.145" />
      <path d="M11 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0M8 11V7a4 4 0 0 1 8 0v4M19 22v.01M19 19a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483" />
    </g>
    <defs>
      <clipPath id="lock-question_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLockQuestion;
