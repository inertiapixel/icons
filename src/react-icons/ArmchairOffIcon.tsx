import React from "react";

export const ArmchairOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85675)">
<path d="M17 13C17 12.4696 17.2107 11.9609 17.5858 11.5858C17.9609 11.2107 18.4696 11 19 11C19.5304 11 20.0391 11.2107 20.4142 11.5858C20.7893 11.9609 21 12.4696 21 13V17M19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V13C3 12.4696 3.21071 11.9609 3.58579 11.5858C3.96086 11.2107 4.46957 11 5 11C5.53043 11 6.03914 11.2107 6.41421 11.5858C6.78929 11.9609 7 12.4696 7 13V15H15.036"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 11V6.00001C4.99966 5.69829 5.04483 5.39825 5.134 5.11001M7.121 3.13001C7.40592 3.04328 7.70217 2.99947 8 3H16C16.7957 3 17.5587 3.31608 18.1213 3.87868C18.6839 4.44129 19 5.20436 19 6.00001V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 19V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 19V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85675">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
