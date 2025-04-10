import React from "react";

export const BrandCarbonIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_82629)">
<path d="M14 10V9.8C14 9.56362 13.9534 9.32956 13.863 9.11117C13.7725 8.89278 13.6399 8.69435 13.4728 8.52721C13.3056 8.36006 13.1072 8.22748 12.8888 8.13702C12.6704 8.04656 12.4364 8 12.2 8H11.8C11.3226 8 10.8648 8.18964 10.5272 8.52721C10.1896 8.86477 10 9.32261 10 9.8V14.2C10 14.6774 10.1896 15.1352 10.5272 15.4728C10.8648 15.8104 11.3226 16 11.8 16H12.2C12.4364 16 12.6704 15.9534 12.8888 15.863C13.1072 15.7725 13.3056 15.6399 13.4728 15.4728C13.6399 15.3056 13.7725 15.1072 13.863 14.8888C13.9534 14.6704 14 14.4364 14 14.2V14" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V6Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82629">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
