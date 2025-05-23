import React from "react";

export const BadgeAdOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84512)">
<path d="M9 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V17M19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 14V15H15M17 13V11C17 10.4696 16.7893 9.96086 16.4142 9.58579C16.0391 9.21071 15.5304 9 15 9H14V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 15.0004V10.5004C6.99993 10.2534 7.06085 10.0103 7.17735 9.79247C7.29385 9.57469 7.46232 9.38904 7.66781 9.25202C7.8733 9.11499 8.10944 9.03083 8.35528 9.007C8.60111 8.98317 8.84902 9.02041 9.077 9.11542M9.865 9.87742C9.952 10.0674 10 10.2774 10 10.5004V15.0004"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 13H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84512">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
