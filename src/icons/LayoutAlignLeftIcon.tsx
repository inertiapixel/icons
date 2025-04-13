import React from "react";

export const LayoutAlignLeftIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57876)">
<path d="M4 3C4.26522 3 4.51957 3.10536 4.70711 3.29289C4.89464 3.48043 5 3.73478 5 4V20C5 20.2652 4.89464 20.5196 4.70711 20.7071C4.51957 20.8946 4.26522 21 4 21C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3Z" fill="black"/>
<path d="M18 8C18.7956 8 19.5587 8.31607 20.1213 8.87868C20.6839 9.44129 21 10.2044 21 11V13C21 13.7956 20.6839 14.5587 20.1213 15.1213C19.5587 15.6839 18.7956 16 18 16H10C9.20435 16 8.44129 15.6839 7.87868 15.1213C7.31607 14.5587 7 13.7956 7 13V11C7 10.2044 7.31607 9.44129 7.87868 8.87868C8.44129 8.31607 9.20435 8 10 8H18Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57876">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
