import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarmPlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#alarm-plus-icon_svg__a)">
      <path d="M16 6.072a8 8 0 1 1-11.995 7.213L4 13l.005-.285A8 8 0 0 1 16 6.072M12 10a1 1 0 0 0-1 1v1h-1l-.117.007A1 1 0 0 0 10 14h1v1l.007.117A1 1 0 0 0 13 15v-1h1l.117-.007A1 1 0 0 0 14 12h-1v-1l-.007-.117A1 1 0 0 0 12 10" />
      <path d="M6.41 3.19a1 1 0 0 1 1.274 1.538l-.097.08-2.75 2a1 1 0 0 1-1.273-1.54l.097-.08zM16.19 3.412a1 1 0 0 1 1.291-.288l.106.067 2.75 2a1 1 0 0 1-1.07 1.685l-.105-.067-2.75-2a1 1 0 0 1-.221-1.397" />
    </g>
    <defs>
      <clipPath id="alarm-plus-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlarmPlusIcon;
