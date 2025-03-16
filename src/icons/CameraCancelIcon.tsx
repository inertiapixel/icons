import * as React from "react";
import type { SVGProps } from "react";
const SvgCameraCancelIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#camera-cancel-icon_svg__a)"
    >
      <path d="M12 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1a2 2 0 0 0 2-2 1 1 0 0 1 1-1h6a1 1 0 0 1 1 1 2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5" />
      <path d="M14.984 13.306a3 3 0 1 0-2.32 2.62M16 19a3 3 0 1 0 6 0 3 3 0 0 0-6 0M17 21l4-4" />
    </g>
    <defs>
      <clipPath id="camera-cancel-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCameraCancelIcon;
