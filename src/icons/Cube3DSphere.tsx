import * as React from "react";
import type { SVGProps } from "react";
const SvgCube3DSphere = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cube-3d-sphere_svg__a)"
    >
      <path d="m6 17.6-2-1.1V14M4 9.998v-2.5l2-1.1M10 4.1 12 3l2 1.1M18 6.398l2 1.1v2.5M20 14v2.5l-2 1.12M14 19.898l-2 1.1-2-1.1M12 11.998l2-1.1M18 8.6l2-1.1M12 12v2.5M12 18.5V21M12 11.999l-2-1.12M6 8.6 4 7.5" />
    </g>
    <defs>
      <clipPath id="cube-3d-sphere_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCube3DSphere;
