import React from "react";

export const PillsIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_66336)">
<path d="M3 8C3 9.32608 3.52678 10.5979 4.46447 11.5355C5.40215 12.4732 6.67392 13 8 13C9.32608 13 10.5979 12.4732 11.5355 11.5355C12.4732 10.5979 13 9.32608 13 8C13 6.67392 12.4732 5.40215 11.5355 4.46447C10.5979 3.52678 9.32608 3 8 3C6.67392 3 5.40215 3.52678 4.46447 4.46447C3.52678 5.40215 3 6.67392 3 8Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 17C13 18.0609 13.4214 19.0783 14.1716 19.8284C14.9217 20.5786 15.9391 21 17 21C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17C21 15.9391 20.5786 14.9217 19.8284 14.1716C19.0783 13.4214 18.0609 13 17 13C15.9391 13 14.9217 13.4214 14.1716 14.1716C13.4214 14.9217 13 15.9391 13 17Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 4.5L11.5 11.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.5 14.5L14.5 19.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66336">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
