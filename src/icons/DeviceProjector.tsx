import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceProjector = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#device-projector_svg__a)"
    >
      <path d="M8 9a5 5 0 1 0 10 0A5 5 0 0 0 8 9" />
      <path d="M9 6H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2M6 15h1M7 18l-1 2M18 18l1 2" />
    </g>
    <defs>
      <clipPath id="device-projector_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDeviceProjector;
