import * as React from "react";
import type { SVGProps } from "react";
const SvgGaugeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#gauge-icon_svg__a)">
      <path
        fill="currentColor"
        d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-.293 3.953a1 1 0 0 0-1.414 0l-2.59 2.59-.083.094-.068.1a2 2 0 0 0-2.547 1.774L10 12l.005.15a2 2 0 1 0 3.917-.701 1 1 0 0 0 .195-.152l2.59-2.59.083-.094a1 1 0 0 0-.083-1.32M12 6a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4 1 1 0 1 0 0-2"
      />
    </g>
    <defs>
      <clipPath id="gauge-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGaugeIcon;
