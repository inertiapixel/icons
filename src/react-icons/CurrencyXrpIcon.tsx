import React from "react";

export const CurrencyXrpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77127)">
<path d="M5 5L8.585 8.585C9.49077 9.4906 10.7192 9.99935 12 9.99935C13.2808 9.99935 14.5092 9.4906 15.415 8.585L19 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 18.9993L8.585 15.4143C9.49077 14.5087 10.7192 14 12 14C13.2808 14 14.5092 14.5087 15.415 15.4143L19 18.9983"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77127">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
