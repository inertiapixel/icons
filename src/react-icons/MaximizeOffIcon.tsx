import React from "react";

export const MaximizeOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69030)">
<path d="M4 8.00184V6.00184C4 5.45084 4.223 4.95184 4.584 4.58984"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 16V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 20.0017H18C18.545 20.0017 19.04 19.7837 19.4 19.4297"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69030">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
