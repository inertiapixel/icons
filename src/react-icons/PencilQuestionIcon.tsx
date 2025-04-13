import React from "react";

export const PencilQuestionIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66869)">
<path d="M8 20.0003L14 14.0003L17 11.0003L18.5 9.5003C18.7626 9.23766 18.971 8.92585 19.1131 8.58269C19.2553 8.23953 19.3284 7.87174 19.3284 7.5003C19.3284 7.12887 19.2553 6.76107 19.1131 6.41791C18.971 6.07475 18.7626 5.76295 18.5 5.5003C18.2374 5.23766 17.9256 5.02932 17.5824 4.88718C17.2392 4.74503 16.8714 4.67187 16.5 4.67188C16.1286 4.67188 15.7608 4.74503 15.4176 4.88718C15.0744 5.02932 14.7626 5.23766 14.5 5.5003L4 16.0003V20.0003H8Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 6.5L17.5 10.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 22V22.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 18.9998C19.4483 18.9983 19.8832 18.8466 20.235 18.5687C20.5868 18.2909 20.8352 17.903 20.9406 17.4673C21.0459 17.0315 21.0019 16.5731 20.8158 16.1652C20.6297 15.7574 20.3122 15.4238 19.914 15.2178C19.5162 15.014 19.0611 14.9508 18.6228 15.0385C18.1845 15.1262 17.7888 15.3596 17.5 15.7008"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66869">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
