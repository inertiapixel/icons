import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartShareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#heart-share-icon_svg__a)"
    >
      <path d="m19.501 12.572-.468.464m-6.077 6.019-.955.945-7.5-7.428a5 5 0 1 1 7.5-6.566 5 5 0 1 1 7.5 6.572M16 22l5-5M21 21.5V17h-4.5" />
    </g>
    <defs>
      <clipPath id="heart-share-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeartShareIcon;
