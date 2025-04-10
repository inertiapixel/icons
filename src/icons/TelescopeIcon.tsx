import React from "react";

export const TelescopeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_61971)">
<path d="M6 21L12 16L18 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 13V21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.29397 13.6795L3.45997 13.9605C3.97997 14.8405 5.08397 15.2255 6.06497 14.8705L20.307 9.70547C20.4475 9.65699 20.5758 9.57847 20.6829 9.47537C20.79 9.37227 20.8733 9.24707 20.9271 9.10848C20.9809 8.96989 21.0038 8.82125 20.9943 8.67289C20.9848 8.52454 20.943 8.38005 20.872 8.24947L18.252 3.54447C18.1118 3.30107 17.8828 3.12138 17.613 3.04309C17.3433 2.96479 17.0537 2.99395 16.805 3.12447L16.749 3.15647L4.05497 10.7745C3.03497 11.3875 2.69797 12.6715 3.29497 13.6795H3.29397Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 5L17 10.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61971">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
