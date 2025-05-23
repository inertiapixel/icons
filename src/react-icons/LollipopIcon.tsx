import React from "react";

export const LollipopIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69852)">
<path d="M7 10C7 11.8565 7.7375 13.637 9.05025 14.9497C10.363 16.2625 12.1435 17 14 17C15.8565 17 17.637 16.2625 18.9497 14.9497C20.2625 13.637 21 11.8565 21 10C21 8.14348 20.2625 6.36301 18.9497 5.05025C17.637 3.7375 15.8565 3 14 3C12.1435 3 10.363 3.7375 9.05025 5.05025C7.7375 6.36301 7 8.14348 7 10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 10C21 9.07174 20.6313 8.1815 19.9749 7.52513C19.3185 6.86875 18.4283 6.5 17.5 6.5C16.5717 6.5 15.6815 6.86875 15.0251 7.52513C14.3687 8.1815 14 9.07174 14 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 10C14 10.9283 13.6313 11.8185 12.9749 12.4749C12.3185 13.1313 11.4283 13.5 10.5 13.5C9.57174 13.5 8.6815 13.1313 8.02513 12.4749C7.36875 11.8185 7 10.9283 7 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 17C14.9283 17 15.8185 16.6313 16.4749 15.9749C17.1313 15.3185 17.5 14.4283 17.5 13.5C17.5 12.5717 17.1313 11.6815 16.4749 11.0251C15.8185 10.3687 14.9283 10 14 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 3C13.0717 3 12.1815 3.36875 11.5251 4.02513C10.8687 4.6815 10.5 5.57174 10.5 6.5C10.5 7.42826 10.8687 8.3185 11.5251 8.97487C12.1815 9.63125 13.0717 10 14 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 21L9 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69852">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
