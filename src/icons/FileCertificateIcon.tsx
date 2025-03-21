import * as React from "react";
import type { SVGProps } from "react";
const SvgFileCertificateIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-certificate-icon_svg__a)"
    >
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M5 8V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2h-5" />
      <path d="M3 14a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
      <path d="M4.5 17 3 22l3-1.5L9 22l-1.5-5" />
    </g>
    <defs>
      <clipPath id="file-certificate-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFileCertificateIcon;
