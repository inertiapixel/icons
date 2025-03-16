import * as React from "react";
import type { SVGProps } from "react";
const SvgZoomPanIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#zoom-pan-icon_svg__a)">
      <path d="M12 8a4 4 0 0 1 3.447 6.031l2.26 2.262a1 1 0 0 1-1.414 1.414l-2.262-2.26A4 4 0 0 1 8 12l.005-.2A4 4 0 0 1 12 8M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 1 1-1.414 1.414L12 3.415l-1.293 1.292a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1 0-1.414zM19.293 9.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414L20.585 12l-1.292-1.293a1 1 0 0 1-.083-1.32zM3.293 9.294a1 1 0 1 1 1.414 1.414L3.415 12l1.292 1.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414zM9.292 19.293a1 1 0 0 1 1.414 0l1.293 1.292 1.294-1.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1-.001-1.414" />
    </g>
    <defs>
      <clipPath id="zoom-pan-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgZoomPanIcon;
