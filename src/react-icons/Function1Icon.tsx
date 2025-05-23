import React from "react";

export const Function1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73071)">
<path d="M4 6.667C4 5.95967 4.28099 5.28131 4.78115 4.78115C5.28131 4.28099 5.95967 4 6.667 4H17.333C17.6832 4 18.03 4.06898 18.3536 4.20301C18.6772 4.33704 18.9712 4.53349 19.2189 4.78115C19.4665 5.0288 19.663 5.32281 19.797 5.64638C19.931 5.96996 20 6.31676 20 6.667V17.333C20 17.6832 19.931 18.03 19.797 18.3536C19.663 18.6772 19.4665 18.9712 19.2189 19.2189C18.9712 19.4665 18.6772 19.663 18.3536 19.797C18.03 19.931 17.6832 20 17.333 20H6.667C6.31676 20 5.96996 19.931 5.64638 19.797C5.32281 19.663 5.0288 19.4665 4.78115 19.2189C4.53349 18.9712 4.33704 18.6772 4.20301 18.3536C4.06898 18.03 4 17.6832 4 17.333V6.667Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 15.5V15.75C9 16.44 9.56 17 10.25 17C10.96 17 11.554 16.462 11.624 15.756L12.376 8.244C12.41 7.90318 12.5694 7.58714 12.8233 7.35726C13.0772 7.12737 13.4075 7.00005 13.75 7C14.44 7 15 7.56 15 8.25V8.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 12H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73071">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
