import * as React from "react";
import type { SVGProps } from "react";
const SvgLegoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#lego-icon_svg__a)">
      <path
        fill="currentColor"
        d="M16 2a1 1 0 0 1 1 1v1l.2.005A4 4 0 0 1 20.995 7.8L21 8v9a4 4 0 0 1-2.845 3.83l-.155.043V21a1 1 0 0 1-.883.993L17 22H7a1 1 0 0 1-1-1v-.127l-.155-.042a4 4 0 0 1-2.84-3.631L3 17V8a4 4 0 0 1 4-4V3a1 1 0 0 1 1-1zm-.8 12.286a1 1 0 0 0-1.414.014 2.5 2.5 0 0 1-3.572 0 1 1 0 0 0-1.428 1.4 4.5 4.5 0 0 0 6.428 0 1 1 0 0 0-.014-1.414M9.51 10H9.5a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m5 0h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2"
      />
    </g>
    <defs>
      <clipPath id="lego-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLegoIcon;
