import React from "react";

export const LetterCaseIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_70664)">
<path d="M14 15.5C14 16.4283 14.3687 17.3185 15.0251 17.9749C15.6815 18.6313 16.5717 19 17.5 19C18.4283 19 19.3185 18.6313 19.9749 17.9749C20.6313 17.3185 21 16.4283 21 15.5C21 14.5717 20.6313 13.6815 19.9749 13.0251C19.3185 12.3687 18.4283 12 17.5 12C16.5717 12 15.6815 12.3687 15.0251 13.0251C14.3687 13.6815 14 14.5717 14 15.5Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 19V8.5C3 7.57174 3.36875 6.6815 4.02513 6.02513C4.6815 5.36875 5.57174 5 6.5 5C7.42826 5 8.3185 5.36875 8.97487 6.02513C9.63125 6.6815 10 7.57174 10 8.5V19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 13H10" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 12V19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70664">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
