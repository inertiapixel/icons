import React from "react";

export const TrolleyIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60895)">
<path d="M9 19C9 19.5304 9.21071 20.0391 9.58579 20.4142C9.96086 20.7893 10.4696 21 11 21C11.5304 21 12.0391 20.7893 12.4142 20.4142C12.7893 20.0391 13 19.5304 13 19C13 18.4696 12.7893 17.9609 12.4142 17.5858C12.0391 17.2107 11.5304 17 11 17C10.4696 17 9.96086 17.2107 9.58579 17.5858C9.21071 17.9609 9 18.4696 9 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 16L9 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 17L20 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 10L19 11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.59247 4.69461L12.8985 6.79861C13.043 6.8905 13.1679 7.01004 13.2661 7.15037C13.3643 7.2907 13.4338 7.44904 13.4706 7.6163C13.5074 7.78357 13.5108 7.95645 13.4805 8.12503C13.4503 8.2936 13.3871 8.45454 13.2945 8.59861L10.2005 13.4096C10.0146 13.6989 9.7217 13.9028 9.38584 13.9767C9.04998 14.0505 8.69854 13.9883 8.40847 13.8036L5.10247 11.6996C4.95795 11.6077 4.833 11.4882 4.73482 11.3478C4.63664 11.2075 4.56716 11.0492 4.53036 10.8819C4.49356 10.7146 4.49018 10.5418 4.5204 10.3732C4.55062 10.2046 4.61386 10.0437 4.70647 9.89961L7.80047 5.08961C7.98632 4.80027 8.27924 4.59636 8.6151 4.52252C8.95096 4.44867 9.30239 4.50991 9.59247 4.69461Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60895">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
