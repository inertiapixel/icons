import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeQuestionIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#home-question-icon_svg__a)"
    >
      <path d="M20.136 11.136 12 3l-9 9h2v7a2 2 0 0 0 2 2h7" />
      <path d="M9 21v-6a2 2 0 0 1 2-2h2c.467 0 .896.16 1.236.428M19 22v.01M19 19a2 2 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483" />
    </g>
    <defs>
      <clipPath id="home-question-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHomeQuestionIcon;
