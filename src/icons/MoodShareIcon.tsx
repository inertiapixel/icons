import React from "react";

export const MoodShareIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_68101)">
<path d="M20.9422 13.018C21.1485 11.2062 20.7995 9.37448 19.9416 7.76543C19.0836 6.15637 17.7571 4.8459 16.1377 4.00755C14.5183 3.1692 12.6825 2.84253 10.8733 3.07081C9.06418 3.29908 7.36703 4.07153 6.00667 5.28585C4.6463 6.50017 3.68688 8.09908 3.25549 9.87082C2.82409 11.6426 2.94106 13.5036 3.5909 15.2073C4.24075 16.9111 5.39281 18.3773 6.89452 19.4118C8.39623 20.4462 10.1767 21.0001 12.0002 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 10H9.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 10H15.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 15C10.158 15.672 11.06 16 12 16C12.213 16 12.424 15.983 12.63 15.95" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 22L21 17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 21.5V17H16.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68101">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
