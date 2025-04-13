import React from "react";

export const CalendarTimeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80345)">
<path d="M11.795 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H17C17.5304 5 18.0391 5.21071 18.4142 5.58579C18.7893 5.96086 19 6.46957 19 7V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 18C14 19.0609 14.4214 20.0783 15.1716 20.8284C15.9217 21.5786 16.9391 22 18 22C19.0609 22 20.0783 21.5786 20.8284 20.8284C21.5786 20.0783 22 19.0609 22 18C22 16.9391 21.5786 15.9217 20.8284 15.1716C20.0783 14.4214 19.0609 14 18 14C16.9391 14 15.9217 14.4214 15.1716 15.1716C14.4214 15.9217 14 16.9391 14 18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 3V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 3V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 11H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 16.4961V18.0001L19 19.0001"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80345">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
