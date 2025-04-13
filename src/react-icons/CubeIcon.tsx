import React from "react";

export const CubeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77477)">
<path d="M21 16.0085V7.9905C20.9994 7.64157 20.9066 7.299 20.731 6.99748C20.5554 6.69596 20.3032 6.4462 20 6.2735L13 2.2655C12.6954 2.09151 12.3508 2 12 2C11.6492 2 11.3046 2.09151 11 2.2655L4 6.2735C3.381 6.6285 3 7.2835 3 7.9915V16.0095C3 16.7185 3.381 17.3725 4 17.7265L11 21.7345C11.3046 21.9085 11.6492 22 12 22C12.3508 22 12.6954 21.9085 13 21.7345L20 17.7265C20.619 17.3715 21 16.7165 21 16.0085Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12.0009L20.73 6.96094"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.26953 6.96094L11.9995 12.0009"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77477">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
