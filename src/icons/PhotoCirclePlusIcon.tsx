import React from "react";

export const PhotoCirclePlusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_66636)">
<path d="M15 8H15.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.964 12.806C21.0759 11.5612 20.9274 10.3067 20.5277 9.12241C20.1281 7.93816 19.4862 6.85013 18.6429 5.92763C17.7996 5.00512 16.7734 4.26838 15.6297 3.76433C14.486 3.26028 13.2499 2.99998 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3.00003 13.2153 3.2462 14.418 3.72365 15.5356C4.20111 16.6532 4.89996 17.6625 5.77807 18.5026C6.65618 19.3428 7.69535 19.9964 8.83292 20.4241C9.97048 20.8518 11.1829 21.0446 12.397 20.991" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 15.0018L8 11.0018C8.928 10.1088 10.072 10.1088 11 11.0018L15 15.0018" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 14.0018L15 13.0018C15.928 12.1088 17.072 12.1088 18 13.0018" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19.3281H22" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16.3281V22.3281" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66636">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
