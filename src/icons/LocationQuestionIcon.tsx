import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationQuestionIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#location-question-icon_svg__a)"
    >
      <path d="M14.5 21a.551.551 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1L21 3l-2.966 8.215M19 22v.01M19 19a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483" />
    </g>
    <defs>
      <clipPath id="location-question-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLocationQuestionIcon;
