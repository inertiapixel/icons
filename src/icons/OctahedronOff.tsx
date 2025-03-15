import * as React from "react";
import type { SVGProps } from "react";
const SvgOctahedronOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#octahedron-off_svg__a)"
    >
      <path d="m6.771 6.77-4.475 4.528a.983.983 0 0 0 0 1.406l8.845 8.95a1.234 1.234 0 0 0 1.718-.002l4.36-4.411m2.002-2.025 2.483-2.512a.984.984 0 0 0 0-1.408l-8.845-8.948a1.233 1.233 0 0 0-1.718 0L8.766 4.751" />
      <path d="M2 12c.004.086.103.178.296.246l8.845 2.632c.459.163 1.259.163 1.718 0l1.544-.46m3.094-.92 4.207-1.252c.195-.07.294-.156.296-.243M12 2.121v5.88m0 4v9.88M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="octahedron-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgOctahedronOff;
