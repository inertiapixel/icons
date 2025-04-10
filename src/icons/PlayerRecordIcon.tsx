import React from "react";

export const PlayerRecordIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_57638)">
<path d="M8 5.07177C9.51458 4.19734 11.274 3.84332 13.0089 4.06389C14.7438 4.28446 16.3587 5.06747 17.6063 6.29307C18.8538 7.51867 19.6655 9.11934 19.9168 10.8501C20.1682 12.5808 19.8456 14.3462 18.9982 15.8761C18.1509 17.406 16.8255 18.6161 15.2251 19.3211C13.6246 20.0262 11.8372 20.1873 10.1364 19.7799C8.43563 19.3726 6.91521 18.4191 5.80786 17.0654C4.70052 15.7118 4.06725 14.0325 4.005 12.2848L4 11.9998L4.005 11.7148C4.05335 10.3597 4.44534 9.03909 5.14416 7.87708C5.84298 6.71506 6.82569 5.74973 8 5.07177Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57638">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
