import React from "react";

export const FileSearchIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74148)">
<path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V12.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 17.5C14 18.163 14.2634 18.7989 14.7322 19.2678C15.2011 19.7366 15.837 20 16.5 20C17.163 20 17.7989 19.7366 18.2678 19.2678C18.7366 18.7989 19 18.163 19 17.5C19 16.837 18.7366 16.2011 18.2678 15.7322C17.7989 15.2634 17.163 15 16.5 15C15.837 15 15.2011 15.2634 14.7322 15.7322C14.2634 16.2011 14 16.837 14 17.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 19.5L21 22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74148">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
