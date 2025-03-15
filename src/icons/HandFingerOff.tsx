import * as React from "react";
import type { SVGProps } from "react";
const SvgHandFingerOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hand-finger-off_svg__a)"
    >
      <path d="M8 13V8M8.059 4.076a1.5 1.5 0 0 1 2.94.423V7m0 4v1M12.063 8.065A1.5 1.5 0 0 1 13.999 9.5v.5M14.059 10.084a1.5 1.5 0 0 1 2.94.418v1.5" />
      <path d="M16.998 11.5a1.5 1.5 0 0 1 3 0V16m-.88 3.129A6 6 0 0 1 13.998 22h-2 .208a6 6 0 0 1-5.012-2.7l-.196-.3q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022 1.87 1.87 0 0 1 2.28.28L7.998 13M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="hand-finger-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHandFingerOff;
