import * as React from "react";
import type { SVGProps } from "react";
const SvgRouterOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#router-off-icon_svg__a)"
    >
      <path d="M17 13h2a2 2 0 0 1 2 2v2m-.588 3.417c-.362.36-.861.583-1.412.583H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h8M17 17v.01M13 17v.01M12.227 8.2a4 4 0 0 1 6.024.55M9.445 5.407A8 8 0 0 1 21.5 6.5M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="router-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRouterOffIcon;
