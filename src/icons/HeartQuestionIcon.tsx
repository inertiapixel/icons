import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartQuestionIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#heart-question-icon_svg__a)"
    >
      <path d="M14.106 17.915 12.001 20l-7.5-7.428a5 5 0 1 1 7.5-6.566 5 5 0 0 1 8.524 5.127M19 22v.01M19 19a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483" />
    </g>
    <defs>
      <clipPath id="heart-question-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeartQuestionIcon;
