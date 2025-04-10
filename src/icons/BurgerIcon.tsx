import React from "react";

export const BurgerIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_80651)">
<path d="M4 15H20C20 16.0609 19.5786 17.0783 18.8284 17.8284C18.0783 18.5786 17.0609 19 16 19H8C6.93913 19 5.92172 18.5786 5.17157 17.8284C4.42143 17.0783 4 16.0609 4 15Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.0008 4C15.7838 4 18.9538 6.133 19.7868 9H4.21484C5.04784 6.133 8.21784 4 12.0008 4Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 12H19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80651">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
