import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBigDownLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#arrow-big-down-line_svg__a)">
      <path d="m9 5-.117.007A1 1 0 0 0 8 6v4.999L5.414 11A2 2 0 0 0 4 14.414L10.586 21a2 2 0 0 0 2.828 0L20 14.414a2 2 0 0 0 .434-2.18l-.068-.145A2 2 0 0 0 18.586 11L16 10.999V6a1 1 0 0 0-1-1zM14.999 2a1 1 0 0 1 .117 1.993L14.999 4h-6a1 1 0 0 1-.117-1.993L8.999 2z" />
    </g>
    <defs>
      <clipPath id="arrow-big-down-line_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowBigDownLine;
