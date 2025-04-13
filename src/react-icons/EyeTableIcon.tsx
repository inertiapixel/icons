import React from "react";

export const EyeTableIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74551)">
<path d="M7.99928 18H7.98828"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9993 18H11.9883"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.9993 18H15.9883"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 3H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 3V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H18C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20V3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 7H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 15H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 15H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 11V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74551">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
