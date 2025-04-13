import React from "react";

export const CreditCardPayIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77629)">
<path d="M12 19H6C5.20435 19 4.44129 18.6839 3.87868 18.1213C3.31607 17.5587 3 16.7956 3 16V8C3 7.20435 3.31607 6.44129 3.87868 5.87868C4.44129 5.31607 5.20435 5 6 5H18C18.7956 5 19.5587 5.31607 20.1213 5.87868C20.6839 6.44129 21 7.20435 21 8V12.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 10H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16L22 19L19 22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.00391 15H7.00891"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 15H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77629">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
