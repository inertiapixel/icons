import React from "react";

export const HistoryIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_71789)">
<path d="M12 8V12L14 14" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.05078 10.9981C3.27487 8.79817 4.30105 6.75773 5.93351 5.26608C7.56598 3.77443 9.69048 2.936 11.9017 2.91074C14.1128 2.88549 16.2559 3.67518 17.922 5.12915C19.5882 6.58312 20.6607 8.59959 20.935 10.7938C21.2092 12.9881 20.6661 15.2065 19.4091 17.0259C18.1522 18.8452 16.2694 20.1382 14.1201 20.658C11.9707 21.1778 9.70519 20.8881 7.75578 19.8442C5.80636 18.8003 4.3095 17.0752 3.55078 14.9981M3.05078 19.9981V14.9981H8.05078" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71789">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
