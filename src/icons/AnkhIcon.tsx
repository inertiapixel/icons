import React from "react";

export const AnkhIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_85836)">
<path d="M6 13H18" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21V13M12 13L11.578 12.789C10.5029 12.2515 9.59863 11.4252 8.96667 10.4028C8.33471 9.38028 7.99998 8.20201 8 7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7C16 8.20201 15.6653 9.38028 15.0333 10.4028C14.4014 11.4252 13.4971 12.2515 12.422 12.789L12 13Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85836">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
