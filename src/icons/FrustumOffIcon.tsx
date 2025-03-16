import * as React from "react";
import type { SVGProps } from "react";
const SvgFrustumOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#frustum-off-icon_svg__a)"
    >
      <path d="m7.72 3.727 3.484-1.558a1.95 1.95 0 0 1 1.59 0l4.496 2.01c.554.246.963.736 1.112 1.328l2.538 10.158c.103.412.07.832-.075 1.206m-2.299 1.7-5.725 2.737a1.95 1.95 0 0 1-1.682 0l-7.035-3.365a1.99 1.99 0 0 1-1.064-2.278l2.52-10.08" />
      <path d="M18 4.82 12.8 7.144a1.96 1.96 0 0 1-1.602 0M12 7.32V8m0 4v9.5M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="frustum-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFrustumOffIcon;
