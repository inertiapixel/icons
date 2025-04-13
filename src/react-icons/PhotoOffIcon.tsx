import React from "react";

export const PhotoOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66553)">
<path d="M15 8H15.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V17M20.144 20.099C19.8649 20.3847 19.5314 20.6117 19.1632 20.7664C18.7949 20.9212 18.3994 21.0006 18 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V6C3 5.155 3.349 4.392 3.91 3.847"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 16.0018L8 11.0018C8.928 10.1088 10.072 10.1088 11 11.0018L16 16.0018"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.3281 12.3361C16.9021 12.2821 17.4831 12.5021 17.9981 12.9981L20.9981 15.9981"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66553">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
