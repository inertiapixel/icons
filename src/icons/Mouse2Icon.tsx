import React from "react";

export const Mouse2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_67946)">
<path d="M6 7C6 5.93913 6.42143 4.92172 7.17157 4.17157C7.92172 3.42143 8.93913 3 10 3H14C15.0609 3 16.0783 3.42143 16.8284 4.17157C17.5786 4.92172 18 5.93913 18 7V17C18 18.0609 17.5786 19.0783 16.8284 19.8284C16.0783 20.5786 15.0609 21 14 21H10C8.93913 21 7.92172 20.5786 7.17157 19.8284C6.42143 19.0783 6 18.0609 6 17V7Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3V10" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 10H18" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67946">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
