import React from "react";

export const KeyframeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_57898)">
<path d="M11.9989 4C11.6156 4.00216 11.2375 4.08908 10.8918 4.25453C10.546 4.41998 10.2411 4.65987 9.99892 4.957L5.64392 10.197C5.22872 10.7043 5.00128 11.3392 5.00001 11.9948C4.99873 12.6503 5.2237 13.2861 5.63692 13.795L10.0049 19.051C10.5039 19.651 11.2299 20 11.9989 20C12.3822 19.9978 12.7603 19.9109 13.1061 19.7455C13.4519 19.58 13.7568 19.3401 13.9989 19.043L18.3539 13.803C18.7691 13.2957 18.9966 12.6608 18.9978 12.0052C18.9991 11.3497 18.7741 10.7139 18.3609 10.205L13.9929 4.949C13.7509 4.65379 13.4467 4.41567 13.102 4.25162C12.7573 4.08757 12.3807 4.00165 11.9989 4Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57898">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
