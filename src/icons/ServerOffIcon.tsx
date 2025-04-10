import React from "react";

export const ServerOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_64300)">
<path d="M12 12H6C5.20435 12 4.44129 11.6839 3.87868 11.1213C3.31607 10.5587 3 9.79565 3 9V7C3 5.917 3.574 4.967 4.435 4.44M8 4H18C18.7956 4 19.5587 4.31607 20.1213 4.87868C20.6839 5.44129 21 6.20435 21 7V9C21 9.79565 20.6839 10.5587 20.1213 11.1213C19.5587 11.6839 18.7956 12 18 12H16" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 12H18C18.7956 12 19.5587 12.3161 20.1213 12.8787C20.6839 13.4413 21 14.2044 21 15V17M19.552 19.568C19.084 19.8515 18.5471 20.0009 18 20H6C5.20435 20 4.44129 19.6839 3.87868 19.1213C3.31607 18.5587 3 17.7956 3 17V15C3 14.2044 3.31607 13.4413 3.87868 12.8787C4.44129 12.3161 5.20435 12 6 12H12" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 8V8.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 16V16.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64300">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
