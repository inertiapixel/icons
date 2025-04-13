import React from "react";

export const DogIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75217)">
<path d="M11 5H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 12C18.333 17.333 16.667 20 14 20H10C7.333 20 5.667 17.333 5 12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 16C11 16.667 11.333 17 12 17C12.667 17 13 16.667 13 16H11Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 18V20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 11V11.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 11V11.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.99952 4L10.9995 4.97L4.76152 11.658C4.58629 11.855 4.34167 11.9765 4.07885 11.9972C3.81604 12.0179 3.55541 11.9361 3.35152 11.769C3.21324 11.6565 3.10929 11.5074 3.05149 11.3388C2.99368 11.1702 2.98434 10.9887 3.02452 10.815L4.99952 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 4L13 4.97L19.238 11.658C19.596 12.066 20.227 12.116 20.648 11.769C20.7863 11.6565 20.8902 11.5074 20.948 11.3388C21.0058 11.1702 21.0152 10.9887 20.975 10.815L19 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75217">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
