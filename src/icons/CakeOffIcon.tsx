import * as React from "react";
import type { SVGProps } from "react";
const SvgCakeOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cake-off-icon_svg__a)"
    >
      <path d="M21 17v-5a3 3 0 0 0-3-3h-5M9 9H6a3 3 0 0 0-3 3v8h17" />
      <path d="M3 14.804A2.4 2.4 0 0 0 4 15a2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1m4 0a2.4 2.4 0 0 0 2 1c.35.007.692-.062 1-.197M10.172 6.188q.105-.238.278-.451L12 4l1.465 1.638a2 2 0 0 1-.65 3.19M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="cake-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCakeOffIcon;
