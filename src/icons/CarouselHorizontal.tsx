import * as React from "react";
import type { SVGProps } from "react";
const SvgCarouselHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#carousel-horizontal_svg__a)">
      <path d="M16 4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M22 6a1 1 0 0 1 .117 1.993L22 8h-1v8h1a1 1 0 0 1 .117 1.993L22 18h-1a2 2 0 0 1-1.995-1.85L19 16V8a2 2 0 0 1 1.85-1.995L21 6zM2.999 6a2 2 0 0 1 1.995 1.85l.005.15v8a2 2 0 0 1-1.85 1.995l-.15.005h-1a1 1 0 0 1-.117-1.993L1.999 16h1V8h-1a1 1 0 0 1-.117-1.993L1.999 6z" />
    </g>
    <defs>
      <clipPath id="carousel-horizontal_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCarouselHorizontal;
