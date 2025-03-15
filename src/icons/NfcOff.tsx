import * as React from "react";
import type { SVGProps } from "react";
const SvgNfcOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#nfc-off_svg__a)"
    >
      <path d="M11 20a3 3 0 0 1-3-3V8M13 4a3 3 0 0 1 3 3v5m0 4v2l-5-5" />
      <path d="M8 4h9a3 3 0 0 1 3 3v9m-.873 3.116A3 3 0 0 1 17 20H7a3 3 0 0 1-3-3V7c0-.83.337-1.582.882-2.125M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="nfc-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNfcOff;
