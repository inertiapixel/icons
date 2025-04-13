import React from "react";

export const SquareToggleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62568)">
<path d="M12 2V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 20C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 10V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62568">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
