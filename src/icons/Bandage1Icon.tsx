import React from "react";

export const Bandage1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84331)">
<path d="M14 12V12.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 12V12.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 10V10.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14V14.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.50053 12.5005L12.5005 4.50053C13.4288 3.57227 14.6878 3.05078 16.0005 3.05078C17.3133 3.05078 18.5723 3.57227 19.5005 4.50053C20.4288 5.42879 20.9503 6.68777 20.9503 8.00053C20.9503 9.31328 20.4288 10.5723 19.5005 11.5005L11.5005 19.5005C10.5723 20.4288 9.31328 20.9503 8.00053 20.9503C6.68777 20.9503 5.42879 20.4288 4.50053 19.5005C3.57227 18.5723 3.05078 17.3133 3.05078 16.0005C3.05078 14.6878 3.57227 13.4288 4.50053 12.5005Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84331">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
