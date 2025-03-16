import * as React from "react";
import type { SVGProps } from "react";
const SvgFeatherOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#feather-off-icon_svg__a)"
    >
      <path d="m4 20 8-8M14 5v5h5M9 11v4h4M6 13v5h5M6 13l3.502-3.502m2.023-2.023L14 5" />
      <path d="M19 10c.638-.636 1-1.515 1-2.486A3.515 3.515 0 0 0 16.483 4c-.97 0-1.847.367-2.483 1M11 18l3.499-3.499m2.008-2.008L19 10M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="feather-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFeatherOffIcon;
