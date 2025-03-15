import * as React from "react";
import type { SVGProps } from "react";
const SvgHelpTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#help-triangle_svg__a)">
      <path
        fill="currentColor"
        d="M12 1.672c.954 0 1.844.467 2.39 1.247l.104.16 8.114 13.548a2.913 2.913 0 0 1-2.307 4.363l-.195.008H3.881a2.914 2.914 0 0 1-2.582-4.2l.1-.185 8.11-13.538a2.91 2.91 0 0 1 2.49-1.403m0 13.33a1 1 0 0 0-.994.883l-.007.117.007.127a1 1 0 0 0 1.986 0l.007-.117-.007-.127a1 1 0 0 0-.993-.883m1.367-6.673a2.98 2.98 0 0 0-3.63.728 1 1 0 0 0 1.44 1.383l.17-.18a.98.98 0 0 1 1.11-.15 1 1 0 0 1-.34 1.886l-.232.012a1 1 0 0 0 .111 1.994 3 3 0 0 0 1.371-5.673"
      />
    </g>
    <defs>
      <clipPath id="help-triangle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHelpTriangle;
