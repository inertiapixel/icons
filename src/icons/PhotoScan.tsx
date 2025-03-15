import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoScan = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#photo-scan_svg__a)"
    >
      <path d="M15 8h.01M6 12.999l2.644-2.644a1.21 1.21 0 0 1 1.712 0L14 13.999" />
      <path d="m13 12.999 1.644-1.644a1.21 1.21 0 0 1 1.712 0L18 12.999M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2" />
    </g>
    <defs>
      <clipPath id="photo-scan_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhotoScan;
