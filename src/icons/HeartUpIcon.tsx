import React from "react";

export const HeartUpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_72199)">
<path d="M12.0013 19.9997L4.50128 12.5717C4.00658 12.0903 3.61692 11.5117 3.35683 10.8723C3.09673 10.2329 2.97184 9.54664 2.99002 8.85662C3.00819 8.1666 3.16904 7.48782 3.46244 6.86303C3.75583 6.23823 4.17541 5.68094 4.69476 5.22627C5.21411 4.77159 5.82198 4.42938 6.48009 4.22117C7.1382 4.01296 7.83228 3.94327 8.51865 4.01649C9.20501 4.08971 9.86878 4.30425 10.4682 4.64659C11.0675 4.98894 11.5895 5.45169 12.0013 6.00569C12.4013 5.47894 12.9019 5.0368 13.4741 4.70488C14.0462 4.37296 14.6785 4.15787 15.3344 4.07205C15.9902 3.98623 16.6566 4.0314 17.2949 4.20494C17.9332 4.37848 18.5307 4.67694 19.0528 5.08303C19.5749 5.48912 20.0113 5.99477 20.3366 6.57069C20.6619 7.14662 20.8697 7.78136 20.948 8.43816C21.0262 9.09496 20.9734 9.76077 20.7925 10.397C20.6117 11.0332 20.3063 11.6273 19.8943 12.1447" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 22V16" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 19L19 16L16 19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72199">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
