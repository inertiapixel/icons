import * as React from "react";
import type { SVGProps } from "react";
const SvgBandage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#bandage_svg__a)">
      <path
        fill="currentColor"
        d="M20.206 3.793a5.95 5.95 0 0 1 .179 8.228l-.18.186-8 8a5.95 5.95 0 0 1-8.592-8.228l.179-.186 8-8a5.95 5.95 0 0 1 8.414 0M11.999 13a1 1 0 0 0-1 1l.007.127a1 1 0 0 0 1.993-.117l-.007-.127a1 1 0 0 0-.993-.883m2-2a1 1 0 0 0-1 1l.007.127a1 1 0 0 0 1.993-.117l-.007-.127a1 1 0 0 0-.993-.883m-4 0a1 1 0 0 0-1 1l.007.127a1 1 0 0 0 1.993-.117l-.007-.127A1 1 0 0 0 9.999 11m2-2a1 1 0 0 0-1 1l.007.127a1 1 0 0 0 1.993-.117l-.007-.127A1 1 0 0 0 11.999 9"
      />
    </g>
    <defs>
      <clipPath id="bandage_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBandage;
