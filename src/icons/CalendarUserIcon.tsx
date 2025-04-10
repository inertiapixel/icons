import React from "react";

export const CalendarUserIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_80329)">
<path d="M12 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V11.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 3V7" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 3V7" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 11H20" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17C17 17.5304 17.2107 18.0391 17.5858 18.4142C17.9609 18.7893 18.4696 19 19 19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17C21 16.4696 20.7893 15.9609 20.4142 15.5858C20.0391 15.2107 19.5304 15 19 15C18.4696 15 17.9609 15.2107 17.5858 15.5858C17.2107 15.9609 17 16.4696 17 17Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 22C22 21.4696 21.7893 20.9609 21.4142 20.5858C21.0391 20.2107 20.5304 20 20 20H18C17.4696 20 16.9609 20.2107 16.5858 20.5858C16.2107 20.9609 16 21.4696 16 22" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80329">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
