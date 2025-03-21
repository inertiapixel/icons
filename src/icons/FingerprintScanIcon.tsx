import * as React from "react";
import type { SVGProps } from "react";
const SvgFingerprintScanIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#fingerprint-scan-icon_svg__a)"
    >
      <path d="M9 11a3 3 0 0 1 6 0c0 1.657.612 3.082 1 4" />
      <path d="M12 11v1.75c-.001 1.11.661 2.206 1 3.25M9 14.25c.068.58.358 1.186.5 1.75M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2" />
    </g>
    <defs>
      <clipPath id="fingerprint-scan-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFingerprintScanIcon;
