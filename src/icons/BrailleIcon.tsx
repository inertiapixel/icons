import React from "react";

export const BrailleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_82897)">
<path d="M15 5C15 5.26522 15.1054 5.51957 15.2929 5.70711C15.4804 5.89464 15.7348 6 16 6C16.2652 6 16.5196 5.89464 16.7071 5.70711C16.8946 5.51957 17 5.26522 17 5C17 4.73478 16.8946 4.48043 16.7071 4.29289C16.5196 4.10536 16.2652 4 16 4C15.7348 4 15.4804 4.10536 15.2929 4.29289C15.1054 4.48043 15 4.73478 15 5Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 5C7 5.26522 7.10536 5.51957 7.29289 5.70711C7.48043 5.89464 7.73478 6 8 6C8.26522 6 8.51957 5.89464 8.70711 5.70711C8.89464 5.51957 9 5.26522 9 5C9 4.73478 8.89464 4.48043 8.70711 4.29289C8.51957 4.10536 8.26522 4 8 4C7.73478 4 7.48043 4.10536 7.29289 4.29289C7.10536 4.48043 7 4.73478 7 5Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 19C7 19.2652 7.10536 19.5196 7.29289 19.7071C7.48043 19.8946 7.73478 20 8 20C8.26522 20 8.51957 19.8946 8.70711 19.7071C8.89464 19.5196 9 19.2652 9 19C9 18.7348 8.89464 18.4804 8.70711 18.2929C8.51957 18.1054 8.26522 18 8 18C7.73478 18 7.48043 18.1054 7.29289 18.2929C7.10536 18.4804 7 18.7348 7 19Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 12H16.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 12H8.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H16.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82897">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
