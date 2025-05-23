import React from "react";

export const GlobeOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72734)">
<path d="M7.35472 7.35325C7.02022 8.09369 6.91914 8.91843 7.06492 9.71773C7.21069 10.517 7.59642 11.253 8.17077 11.8277C8.74512 12.4023 9.48086 12.7885 10.2801 12.9347C11.0793 13.0809 11.9041 12.9803 12.6447 12.6463M14.6517 10.6373C14.9851 9.89615 15.0849 9.07106 14.9378 8.27184C14.7906 7.47261 14.4035 6.73716 13.828 6.1634C13.2525 5.58963 12.5159 5.20477 11.7163 5.06004C10.9166 4.91531 10.0918 5.01759 9.35172 5.35325"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.75 15C7.09009 16.164 8.77867 16.8503 10.5509 16.9511C12.323 17.0519 14.0786 16.5616 15.542 15.557M17.562 13.559C18.2028 12.6477 18.6466 11.6128 18.865 10.5204C19.0835 9.42798 19.0718 8.30201 18.8307 7.21436C18.5897 6.12671 18.1245 5.10126 17.4649 4.20345C16.8053 3.30565 15.9658 2.5552 15 2"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 17V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 21H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72734">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
