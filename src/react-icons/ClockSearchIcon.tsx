import React from "react";

export const ClockSearchIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78445)">
<path d="M20.993 11.6461C20.9242 9.89636 20.3464 8.20468 19.3304 6.7784C18.3144 5.35213 16.9045 4.25321 15.2733 3.61634C13.642 2.97946 11.8605 2.83229 10.1469 3.19285C8.43326 3.55342 6.86207 4.40606 5.62582 5.64628C4.38958 6.8865 3.542 8.46043 3.18694 10.1752C2.83189 11.8899 2.98479 13.671 3.6269 15.3002C4.26902 16.9293 5.37246 18.3358 6.80199 19.3472C8.23153 20.3585 9.92506 20.9309 11.675 20.9941"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V12L13 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 18C15 18.7956 15.3161 19.5587 15.8787 20.1213C16.4413 20.6839 17.2044 21 18 21C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 17.2044 20.6839 16.4413 20.1213 15.8787C19.5587 15.3161 18.7956 15 18 15C17.2044 15 16.4413 15.3161 15.8787 15.8787C15.3161 16.4413 15 17.2044 15 18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.1992 20.1992L21.9992 21.9992"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78445">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
