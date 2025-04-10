import React from "react";

export const RunIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_64709)">
<path d="M12 4C12 4.26522 12.1054 4.51957 12.2929 4.70711C12.4804 4.89464 12.7348 5 13 5C13.2652 5 13.5196 4.89464 13.7071 4.70711C13.8946 4.51957 14 4.26522 14 4C14 3.73478 13.8946 3.48043 13.7071 3.29289C13.5196 3.10536 13.2652 3 13 3C12.7348 3 12.4804 3.10536 12.2929 3.29289C12.1054 3.48043 12 3.73478 12 4Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 17L9 18L9.75 16.5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 21V17L11 14L12 8" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 12V9L12 8L15 11L18 12" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64709">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
