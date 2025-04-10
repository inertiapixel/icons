import React from "react";

export const FileIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_58185)">
<path d="M12 2L12.117 2.007C12.3402 2.03332 12.5481 2.13408 12.707 2.29301C12.8659 2.45194 12.9667 2.65978 12.993 2.883L13 3V7L13.005 7.15C13.0408 7.62617 13.2458 8.07383 13.5829 8.41203C13.92 8.75023 14.3669 8.95666 14.843 8.994L15 9H19L19.117 9.007C19.3402 9.03332 19.5481 9.13408 19.707 9.29301C19.8659 9.45194 19.9667 9.65978 19.993 9.883L20 10V19C20 19.7652 19.7077 20.5015 19.1827 21.0583C18.6578 21.615 17.9399 21.9501 17.176 21.995L17 22H7C6.23479 22 5.49849 21.7077 4.94174 21.1827C4.38499 20.6578 4.04989 19.9399 4.005 19.176L4 19V5C3.99996 4.23479 4.29233 3.49849 4.81728 2.94174C5.34224 2.38499 6.06011 2.04989 6.824 2.005L7 2H12Z" fill="black"/>
<path d="M19.001 7.001H15.001L15 3L19.001 7.001Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58185">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
