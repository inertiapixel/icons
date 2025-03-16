import * as React from "react";
import type { SVGProps } from "react";
const SvgOctahedronPlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#octahedron-plus-icon_svg__a)"
    >
      <path d="m21.498 12.912.206-.209a.984.984 0 0 0 0-1.406l-8.845-8.949a1.233 1.233 0 0 0-1.718 0l-8.845 8.95a.983.983 0 0 0 0 1.406l8.845 8.95a1.234 1.234 0 0 0 1.718-.002l.08-.08" />
      <path d="M2 12c.004.086.103.178.296.246l8.845 2.632c.459.163 1.259.163 1.718 0l2.634-.784m5.41-1.61.801-.238c.195-.07.294-.156.296-.243M12 2.121v19.76M16 19h6M19 16v6" />
    </g>
    <defs>
      <clipPath id="octahedron-plus-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgOctahedronPlusIcon;
