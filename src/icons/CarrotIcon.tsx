import React from "react";

export const CarrotIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_79944)">
<path d="M3.00109 20.9981C3.00109 20.9981 12.8351 17.5091 15.6851 14.6581C16.5261 13.8167 16.9985 12.6757 16.9985 11.4861C16.9985 10.2964 16.5261 9.15549 15.6851 8.31408C15.2688 7.89748 14.7744 7.56701 14.2303 7.34153C13.6862 7.11605 13.1031 7 12.5141 7C11.9251 7 11.3419 7.11605 10.7978 7.34153C10.2537 7.56701 9.75942 7.89748 9.34309 8.31408C6.48309 11.1751 2.99609 21.0031 2.99609 21.0031L3.00109 20.9981Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 13L7.5 11.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 14L14 12" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 8C22 8 20.86 6 19 6C17.594 6 16 8 16 8C16 8 17.14 10 19 10C20.86 10 22 8 22 8Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 2C16 2 14 3.14 14 5C14 6.86 16 8 16 8C16 8 18 6.423 18 5C18 3.14 16 2 16 2Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79944">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
