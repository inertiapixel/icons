import React from "react";

export const CreditCardOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77637)">
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 5H18C18.7956 5 19.5587 5.31607 20.1213 5.87868C20.6839 6.44129 21 7.20435 21 8V16C21.0003 16.2947 20.9572 16.5879 20.872 16.87"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.87 18.8709C18.5879 18.9561 18.2947 18.9992 18 18.9989H6C5.20435 18.9989 4.44129 18.6828 3.87868 18.1202C3.31607 17.5576 3 16.7946 3 15.9989V7.99891C3 6.64691 3.894 5.50391 5.124 5.12891"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 11H11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 11H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 15H7.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 15H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77637">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
