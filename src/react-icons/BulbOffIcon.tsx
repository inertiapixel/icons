import React from "react";

export const BulbOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80671)">
<path d="M3 12H4M12 3V4M20 12H21M5.6 5.6L6.3 6.3M18.4 5.6L17.7 6.3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.0895 7.0839C11.8883 6.93571 12.7111 6.98436 13.4868 7.22565C14.2625 7.46694 14.9677 7.8936 15.5414 8.46871C16.1152 9.04382 16.5401 9.75007 16.7795 10.5263C17.019 11.3026 17.0657 12.1255 16.9155 12.9239M15.5375 15.5349C15.3698 15.7027 15.1903 15.8585 15.0005 16.0009C14.6101 16.3874 14.3161 16.8603 14.1424 17.3815C13.9687 17.9027 13.9201 18.4575 14.0005 19.0009C14.0005 19.5313 13.7898 20.04 13.4148 20.4151C13.0397 20.7902 12.531 21.0009 12.0005 21.0009C11.4701 21.0009 10.9614 20.7902 10.5863 20.4151C10.2113 20.04 10.0005 19.5313 10.0005 19.0009C10.081 18.4575 10.0324 17.9027 9.85867 17.3815C9.68495 16.8603 9.39098 16.3874 9.00054 16.0009C8.42658 15.5705 7.95195 15.0217 7.60886 14.3917C7.26578 13.7617 7.06229 13.0652 7.0122 12.3496C6.96212 11.634 7.06661 10.9159 7.31859 10.2443C7.57056 9.57259 7.96412 8.963 8.47254 8.4569"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.69922 17H14.2992"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80671">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
