import React from "react";

export const IdBadgeOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71420)">
<path d="M7.141 3.125C7.41976 3.04191 7.70912 2.9998 8 3H16C16.7957 3 17.5587 3.31607 18.1213 3.87868C18.6839 4.44129 19 5.20435 19 6V15M18.87 18.874C18.6827 19.4892 18.3026 20.0279 17.7859 20.4106C17.2691 20.7934 16.6431 21 16 21H8C7.20435 21 6.44129 20.6839 5.87868 20.1213C5.31607 19.5587 5 18.7957 5 18V6C4.9998 5.70562 5.04293 5.41282 5.128 5.131"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.1784 11.1758C10.8842 11.3083 10.6264 11.5101 10.4271 11.7639C10.2278 12.0177 10.0928 12.316 10.0338 12.6332C9.97472 12.9505 9.99331 13.2773 10.0879 13.5858C10.1826 13.8943 10.3505 14.1753 10.5773 14.4049C10.8041 14.6344 11.0831 14.8057 11.3904 14.9041C11.6977 15.0024 12.0243 15.025 12.3423 14.9697C12.6602 14.9145 12.9601 14.7832 13.2162 14.5869C13.4724 14.3907 13.6773 14.1354 13.8134 13.8428"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 6H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 18H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71420">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
