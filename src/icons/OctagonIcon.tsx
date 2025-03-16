import * as React from "react";
import type { SVGProps } from "react";
const SvgOctagonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#octagon-icon_svg__a)">
      <path
        fill="currentColor"
        d="M15.3 2H8.7c-.562 0-1.016.201-1.407.593l-4.7 4.7A1.9 1.9 0 0 0 2 8.7v6.6c0 .562.201 1.016.593 1.407l4.7 4.7c.391.392.845.593 1.407.593h6.6c.562 0 1.016-.2 1.407-.593l4.7-4.7c.392-.39.593-.845.593-1.407V8.7c0-.562-.2-1.016-.593-1.407l-4.7-4.7A1.9 1.9 0 0 0 15.3 2"
      />
    </g>
    <defs>
      <clipPath id="octagon-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgOctagonIcon;
