import * as React from "react";
import type { SVGProps } from "react";
const SvgAssetIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#asset-icon_svg__a)">
      <path
        fill="currentColor"
        d="M19 2a3 3 0 0 1 2.86 3.91l-.107.291-.046.093q-.06.128-.134.25l-6.476 11.909a1 1 0 0 1-.066.104A7 7 0 0 1 2 15l.004-.24a7 7 0 0 1 3.342-5.732l.256-.15 11.705-6.355q.18-.123.378-.22l.215-.096.136-.048C18.338 2.056 18.663 2 19 2M9 12a3 3 0 0 0-2.995 2.824L6 15a3 3 0 1 0 3-3m7.04-6.512-5.12 2.778a7.01 7.01 0 0 1 4.816 4.824l2.788-5.128a3 3 0 0 1-2.485-2.474M19 4a1 1 0 0 0-.317.051l-.31.17a1 1 0 1 0 1.465 1.325l.072-.13A1 1 0 0 0 19 4"
      />
    </g>
    <defs>
      <clipPath id="asset-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAssetIcon;
