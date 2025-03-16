import * as React from "react";
import type { SVGProps } from "react";
const SvgWindmillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#windmill-icon_svg__a)">
      <path
        fill="currentColor"
        d="M12 2c3.292 0 6 2.435 6 5.5 0 1.337-.515 2.554-1.369 3.5H21a1 1 0 0 1 1 1c0 3.292-2.435 6-5.5 6-1.336 0-2.553-.515-3.5-1.368V21a1 1 0 0 1-1 1c-3.292 0-6-2.435-6-5.5 0-1.336.515-2.553 1.368-3.5H3a1 1 0 0 1-1-1c0-3.292 2.435-6 5.5-6 1.337 0 2.554.515 3.5 1.369V3a1 1 0 0 1 1-1"
      />
    </g>
    <defs>
      <clipPath id="windmill-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWindmillIcon;
