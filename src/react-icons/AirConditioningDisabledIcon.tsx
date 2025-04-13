import React from "react";

export const AirConditioningDisabledIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_86166)">
<path d="M3 10C3 9.46957 3.21071 8.96086 3.58579 8.58579C3.96086 8.21071 4.46957 8 5 8H19C19.5304 8 20.0391 8.21071 20.4142 8.58579C20.7893 8.96086 21 9.46957 21 10V14C21 14.5304 20.7893 15.0391 20.4142 15.4142C20.0391 15.7893 19.5304 16 19 16H5C4.46957 16 3.96086 15.7893 3.58579 15.4142C3.21071 15.0391 3 14.5304 3 14V10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 16V13C7 12.7348 7.10536 12.4804 7.29289 12.2929C7.48043 12.1054 7.73478 12 8 12H16C16.2652 12 16.5196 12.1054 16.7071 12.2929C16.8946 12.4804 17 12.7348 17 13V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_86166">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
