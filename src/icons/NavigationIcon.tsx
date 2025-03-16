import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#navigation-icon_svg__a)">
      <path
        fill="currentColor"
        d="M11.092 2.582a1 1 0 0 1 1.754-.116l.062.116 8.005 17.365a1.547 1.547 0 0 1-1.837 2.008L12 19.557 5.1 21.895a1.54 1.54 0 0 1-1.52-.23l-.112-.1c-.398-.387-.556-.955-.393-1.557l.047-.15z"
      />
    </g>
    <defs>
      <clipPath id="navigation-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNavigationIcon;
