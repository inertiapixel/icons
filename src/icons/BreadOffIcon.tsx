import React from "react";

export const BreadOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_81054)">
<path d="M7.99997 4L18 4.005V4C18.6073 4.00024 19.2003 4.18481 19.7005 4.52931C20.2006 4.8738 20.5845 5.362 20.8012 5.92934C21.018 6.49669 21.0574 7.11645 20.9144 7.7067C20.7713 8.29695 20.4524 8.82987 20 9.235V16M19.41 19.418C19.05 19.778 18.55 20 18 20H5.99997C5.46954 20 4.96083 19.7893 4.58576 19.4142C4.21069 19.0391 3.99997 18.5304 3.99997 18V9.236C3.6525 8.9252 3.38224 8.5377 3.21064 8.10425C3.03903 7.67079 2.97081 7.2033 3.01138 6.73888C3.05195 6.27446 3.2002 5.82589 3.44436 5.42875C3.68852 5.03161 4.02187 4.69684 4.41797 4.451" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81054">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
