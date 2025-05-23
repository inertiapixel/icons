import React from "react";

export const MelonIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_68974)">
<path d="M19.9996 10.0017C19.9996 15.5247 15.5226 20.0018 9.99963 20.0018C7.38929 20.0055 4.88165 18.9851 3.01562 17.1598L7.35863 13.0068C8.1103 13.6693 9.08328 14.0257 10.0851 14.0053C11.0869 13.9849 12.0446 13.5892 12.7686 12.8965C13.4927 12.2039 13.9304 11.2647 13.9952 10.2648C14.0601 9.26489 13.7472 8.27707 13.1186 7.49675L17.4606 3.34375C19.0988 5.17419 20.003 7.5453 19.9996 10.0017Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68974">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
