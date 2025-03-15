import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarmSnooze = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#alarm-snooze_svg__a)">
      <path d="M16 6.072a8 8 0 1 1-11.995 7.213L4 13l.005-.285A8 8 0 0 1 16 6.072M14 10h-4l-.117.007A1 1 0 0 0 9 11l.007.117A1 1 0 0 0 10 12h1.584l-2.291 2.293-.076.084C8.703 15.014 9.147 16 10 16h4l.117-.007A1 1 0 0 0 15 15l-.007-.117A1 1 0 0 0 14 14h-1.586l2.293-2.293.076-.084c.514-.637.07-1.623-.783-1.623" />
      <path d="M6.41 3.19a1 1 0 0 1 1.274 1.538l-.097.08-2.75 2a1 1 0 0 1-1.273-1.54l.097-.08zM16.19 3.412a1 1 0 0 1 1.291-.288l.106.067 2.75 2a1 1 0 0 1-1.07 1.685l-.105-.067-2.75-2a1 1 0 0 1-.221-1.397" />
    </g>
    <defs>
      <clipPath id="alarm-snooze_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlarmSnooze;
