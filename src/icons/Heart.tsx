import * as React from "react";
import type { SVGProps } from "react";
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#heart_svg__a)">
      <path
        fill="currentColor"
        d="M6.98 3.074a6 6 0 0 1 4.988 1.425l.037.033.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.184-.048.042-7.45 7.378a1 1 0 0 1-1.313.082l-.094-.082-7.493-7.421A6 6 0 0 1 6.98 3.074"
      />
    </g>
    <defs>
      <clipPath id="heart_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeart;
