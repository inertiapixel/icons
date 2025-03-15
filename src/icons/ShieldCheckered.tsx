import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldCheckered = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#shield-checkered_svg__a)">
      <path
        fill="currentColor"
        d="M11.012 11.999v9.754a13 13 0 0 1-8.733-9.754h8.734m9.284 3.794a13 13 0 0 1-7.283 5.95V12h8.707a13 13 0 0 1-1.424 3.794M11.013 2.525v7.474H2.025c-.068-1.432.101-2.88.514-4.282A1 1 0 0 1 3.545 5a11 11 0 0 0 7.192-2.256zm2 7.474V2.546l-.09-.073A11 11 0 0 0 20.11 5.01l.342-.01a1 1 0 0 1 1.005.717c.413 1.403.582 2.85.514 4.282z"
      />
    </g>
    <defs>
      <clipPath id="shield-checkered_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShieldCheckered;
