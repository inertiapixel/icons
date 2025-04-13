import React from "react";

export const DeviceGamepadIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_76607)">
<path d="M2 8C2 7.46957 2.21071 6.96086 2.58579 6.58579C2.96086 6.21071 3.46957 6 4 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 12H10M8 10V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 11V11.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 13V13.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_76607">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
