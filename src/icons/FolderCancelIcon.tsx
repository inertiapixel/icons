import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderCancelIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#folder-cancel-icon_svg__a)"
    >
      <path d="M12 19H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4l3 3h7a2 2 0 0 1 2 2v3M16 19a3 3 0 1 0 6 0 3 3 0 0 0-6 0M17 21l4-4" />
    </g>
    <defs>
      <clipPath id="folder-cancel-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFolderCancelIcon;
