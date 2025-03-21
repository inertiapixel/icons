import * as React from "react";
import type { SVGProps } from "react";
const SvgSocialIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#social-icon_svg__a)"
    >
      <path d="M10 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M3 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M17 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M9 14a3 3 0 1 0 6 0 3 3 0 0 0-6 0M12 7v4M6.7 17.8l2.8-2M17.3 17.8l-2.8-2" />
    </g>
    <defs>
      <clipPath id="social-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSocialIcon;
