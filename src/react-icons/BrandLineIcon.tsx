import React from "react";

export const BrandLineIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82018)">
<path d="M21 10.663C21 6.439 16.959 3 12 3C7.041 3 3 6.439 3 10.663C3 14.446 6.201 17.621 10.527 18.223C11.58 18.462 11.459 18.867 11.223 20.356C11.184 20.594 11.039 21.288 12 20.868C12.96 20.448 17.18 17.667 19.073 15.388C20.377 13.884 21 12.359 21 10.673V10.663Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82018">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
