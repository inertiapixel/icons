import React from "react";

export const CurlingIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_77459)">
<path d="M4 13C4 11.9391 4.42143 10.9217 5.17157 10.1716C5.92172 9.42143 6.93913 9 8 9H16C17.0609 9 18.0783 9.42143 18.8284 10.1716C19.5786 10.9217 20 11.9391 20 13V15C20 16.0609 19.5786 17.0783 18.8284 17.8284C18.0783 18.5786 17.0609 19 16 19H8C6.93913 19 5.92172 18.5786 5.17157 17.8284C4.42143 17.0783 4 16.0609 4 15V13Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 14H20" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 5H14C14.5304 5 15.0391 5.21071 15.4142 5.58579C15.7893 5.96086 16 6.46957 16 7V9" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77459">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
