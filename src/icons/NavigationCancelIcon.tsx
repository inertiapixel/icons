import React from "react";

export const NavigationCancelIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_67709)">
<path d="M16.3715 12.476L12.0005 3L4.03046 20.275C3.96046 20.475 4.01346 20.699 4.16546 20.847C4.31546 20.995 4.53946 21.04 4.73546 20.963L12.0005 18.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19C16 19.7956 16.3161 20.5587 16.8787 21.1213C17.4413 21.6839 18.2044 22 19 22C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19C22 18.2044 21.6839 17.4413 21.1213 16.8787C20.5587 16.3161 19.7956 16 19 16C18.2044 16 17.4413 16.3161 16.8787 16.8787C16.3161 17.4413 16 18.2044 16 19Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 21L21 17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67709">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
