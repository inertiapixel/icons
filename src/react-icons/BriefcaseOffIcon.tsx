import React from "react";

export const BriefcaseOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81040)">
<path d="M11 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V17M19.834 19.818C19.5724 19.9382 19.2879 20.0003 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.18359 4.158C8.34419 3.81199 8.60039 3.51912 8.92198 3.31394C9.24357 3.10876 9.61713 2.99983 9.99859 3H13.9986C14.529 3 15.0377 3.21071 15.4128 3.58579C15.7879 3.96086 15.9986 4.46957 15.9986 5V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12V12.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 13C6.67542 14.8523 10.8328 15.5256 14.905 14.928M18.168 14.165C19.1404 13.8496 20.0872 13.4601 21 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81040">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
