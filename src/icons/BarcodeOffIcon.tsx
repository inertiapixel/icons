import * as React from "react";
import type { SVGProps } from "react";
const SvgBarcodeOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#barcode-off-icon_svg__a)"
    >
      <path d="M4 7V6c0-.552.224-1.052.586-1.414M4 17v1a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v1M16 19.998h2c.551 0 1.05-.223 1.412-.584M5 11h1v2H5zM10 11v2M15 11v.01M19 11v2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="barcode-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBarcodeOffIcon;
