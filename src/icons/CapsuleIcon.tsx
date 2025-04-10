import React from "react";

export const CapsuleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_58658)">
<path d="M12 2L11.757 2.004C9.94395 2.06798 8.22645 2.83295 6.96612 4.13787C5.70578 5.44278 5.00094 7.18582 5 9V15C5 16.8565 5.7375 18.637 7.05025 19.9497C8.36301 21.2625 10.1435 22 12 22L12.243 21.996C14.0561 21.932 15.7735 21.167 17.0339 19.8621C18.2942 18.5572 18.9991 16.8142 19 15V9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58658">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
