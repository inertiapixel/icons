import * as React from "react";
import type { SVGProps } from "react";
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#trash_svg__a)">
      <path d="M19.999 6a1 1 0 0 1 .117 1.993L19.999 8h-.081l-.92 11a3 3 0 0 1-2.823 2.995l-.176.005h-8c-1.598 0-2.904-1.249-2.992-2.75l-.005-.167L4.079 8h-.08a1 1 0 0 1-.117-1.993L3.999 6zM14 2a2 2 0 0 1 2 2 1 1 0 0 1-1.993.117L14 4h-4l-.007.117A1 1 0 0 1 8 4a2 2 0 0 1 1.85-1.995L10 2z" />
    </g>
    <defs>
      <clipPath id="trash_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrash;
