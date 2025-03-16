import * as React from "react";
import type { SVGProps } from "react";
const SvgHighlightOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#highlight-off-icon_svg__a)"
    >
      <path d="m9 9-6 6v4h4l6-6m2-2 2.503-2.504a2.829 2.829 0 0 0-4-4l-2.497 2.497M12.5 5.5l4 4M4.5 13.5l4 4M19 15h2v2m-2 2h-6l3-3M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="highlight-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHighlightOffIcon;
