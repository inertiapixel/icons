import * as React from "react";
import type { SVGProps } from "react";
const SvgCertificate2 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#certificate-2_svg__a)"
    >
      <path d="M9 15a3 3 0 1 0 6 0 3 3 0 0 0-6 0M10 7h4" />
      <path d="M10 18v4l2-1 2 1v-4" />
      <path d="M10 19H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2" />
    </g>
    <defs>
      <clipPath id="certificate-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCertificate2;
