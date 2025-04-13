import React from "react";

export const BikeOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_83780)">
<path d="M2 18C2 18.7956 2.31607 19.5587 2.87868 20.1213C3.44129 20.6839 4.20435 21 5 21C5.79565 21 6.55871 20.6839 7.12132 20.1213C7.68393 19.5587 8 18.7956 8 18C8 17.2044 7.68393 16.4413 7.12132 15.8787C6.55871 15.3161 5.79565 15 5 15C4.20435 15 3.44129 15.3161 2.87868 15.8787C2.31607 16.4413 2 17.2044 2 18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.4383 16.44C16.0882 17.0143 15.9414 17.6897 16.0212 18.3575C16.1011 19.0254 16.4031 19.647 16.8787 20.1226C17.3543 20.5982 17.9759 20.9002 18.6438 20.9801C19.3116 21.0599 19.9869 20.913 20.5613 20.563M22.0013 18C22.0013 17.2044 21.6852 16.4413 21.1226 15.8787C20.56 15.3161 19.7969 15 19.0013 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 19V15L9 12L10.665 10.668M12.88 8.896L14 8L16 11H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 5C16 5.26522 16.1054 5.51957 16.2929 5.70711C16.4804 5.89464 16.7348 6 17 6C17.2652 6 17.5196 5.89464 17.7071 5.70711C17.8946 5.51957 18 5.26522 18 5C18 4.73478 17.8946 4.48043 17.7071 4.29289C17.5196 4.10536 17.2652 4 17 4C16.7348 4 16.4804 4.10536 16.2929 4.29289C16.1054 4.48043 16 4.73478 16 5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83780">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
