import * as React from "react";
import type { SVGProps } from "react";
const SvgDeviceHeartMonitor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#device-heart-monitor_svg__a)">
      <path
        fill="currentColor"
        d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zm-4 13a1 1 0 0 0-.993.883L13 17l.007.127a1 1 0 0 0 1.986 0L15 17.01l-.007-.127A1 1 0 0 0 14 16m3 0a1 1 0 0 0-.993.883L16 17l.007.127a1 1 0 0 0 1.986 0L18 17.01l-.007-.127A1 1 0 0 0 17 16m-6-6.764-.106.211a1 1 0 0 1-.77.545L10 10l-5-.001V13h14V9.999L14.618 10l-.724 1.447a1 1 0 0 1-1.725.11l-.063-.11zM18 5H6a1 1 0 0 0-.993.883L5 6v1.999L9.381 8l.725-1.447a1 1 0 0 1 1.725-.11l.063.11L13 8.763l.106-.21a1 1 0 0 1 .77-.545L14 8l5-.001V6a1 1 0 0 0-.883-.993z"
      />
    </g>
    <defs>
      <clipPath id="device-heart-monitor_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDeviceHeartMonitor;
