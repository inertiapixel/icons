import * as React from "react";
import type { SVGProps } from "react";
const SvgScaleOutlineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#scale-outline-icon_svg__a)"
    >
      <path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
      <path d="M12 7c1.956 0 3.724.802 5 2.095l-2.956 2.904a3 3 0 0 0-4.076-.001L7.012 9.095a6.98 6.98 0 0 1 5-2.095z" />
    </g>
    <defs>
      <clipPath id="scale-outline-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgScaleOutlineIcon;
