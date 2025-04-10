import React from "react";

export const PlaceholderIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_66286)">
<path d="M10 20.415C11.0941 20.8581 12.2726 21.0536 13.4511 20.9874C14.6296 20.9213 15.7789 20.5952 16.8165 20.0325C17.8542 19.4699 18.7544 18.6845 19.4527 17.7329C20.1511 16.7813 20.6301 15.6869 20.8556 14.5283C21.0811 13.3696 21.0474 12.1754 20.757 11.0314C20.4665 9.8873 19.9265 8.82168 19.1756 7.91093C18.4247 7.00018 17.4816 6.26688 16.4139 5.76361C15.3462 5.26033 14.1804 4.99956 13 5H10" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 8L10 5L13 2" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 17L11 13L7 9L3 13L7 17Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66286">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
