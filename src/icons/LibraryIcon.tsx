import React from "react";

export const LibraryIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_70473)">
<path d="M7 5.667C7 4.95967 7.28099 4.28131 7.78115 3.78115C8.28131 3.28099 8.95967 3 9.667 3H18.333C18.6832 3 19.03 3.06898 19.3536 3.20301C19.6772 3.33704 19.9712 3.53349 20.2189 3.78115C20.4665 4.0288 20.663 4.32281 20.797 4.64638C20.931 4.96996 21 5.31676 21 5.667V14.333C21 14.6832 20.931 15.03 20.797 15.3536C20.663 15.6772 20.4665 15.9712 20.2189 16.2189C19.9712 16.4665 19.6772 16.663 19.3536 16.797C19.03 16.931 18.6832 17 18.333 17H9.667C8.95967 17 8.28131 16.719 7.78115 16.2189C7.28099 15.7187 7 15.0403 7 14.333V5.667Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.012 7.26172C3.70534 7.43654 3.45027 7.68922 3.27258 7.99422C3.09488 8.29922 3.00085 8.64573 3 8.99872V18.9987C3 20.0987 3.9 20.9987 5 20.9987H15C15.75 20.9987 16.158 20.6137 16.5 19.9987" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 7H16" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 10H17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 13H14" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70473">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
