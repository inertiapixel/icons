import * as React from "react";
import type { SVGProps } from "react";
const SvgUsb = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#usb_svg__a)"
    >
      <path d="M10 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M12 17V5.5M7 10v3l5 3M12 14.5l5-2V10M16 10h2V8h-2z" />
      <path d="M6 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0M10 5.5h4L12 3z" />
    </g>
    <defs>
      <clipPath id="usb_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUsb;
