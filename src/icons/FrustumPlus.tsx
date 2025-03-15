import * as React from "react";
import type { SVGProps } from "react";
const SvgFrustumPlus = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#frustum-plus_svg__a)"
    >
      <path d="M12.841 21.308a1.95 1.95 0 0 1-1.682 0l-7.035-3.365a1.99 1.99 0 0 1-1.064-2.278L5.598 5.507a1.98 1.98 0 0 1 1.11-1.328l4.496-2.01a1.95 1.95 0 0 1 1.59 0l4.496 2.01c.554.246.963.736 1.112 1.328l1.67 6.683" />
      <path d="m18 4.821-5.198 2.324a1.96 1.96 0 0 1-1.602 0L6 4.82M12 7.32V21.5M16 19h6M19 16v6" />
    </g>
    <defs>
      <clipPath id="frustum-plus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFrustumPlus;
