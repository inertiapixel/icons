import React from "react";

export const HeartDownIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72264)">
<path d="M12.0013 19.9997L4.50128 12.5717C4.00658 12.0903 3.61692 11.5117 3.35683 10.8723C3.09673 10.2329 2.97184 9.54664 2.99002 8.85662C3.00819 8.1666 3.16904 7.48782 3.46244 6.86303C3.75583 6.23823 4.17541 5.68094 4.69476 5.22627C5.21411 4.77159 5.82198 4.42938 6.48009 4.22117C7.1382 4.01296 7.83228 3.94327 8.51865 4.01649C9.20501 4.08971 9.86878 4.30425 10.4682 4.64659C11.0675 4.98894 11.5895 5.45169 12.0013 6.00569C12.3989 5.47484 12.8982 5.02841 13.47 4.69239C14.0419 4.35637 14.6748 4.13748 15.3321 4.04846C15.9893 3.95945 16.6577 4.00209 17.2984 4.17391C17.939 4.34572 18.539 4.64328 19.0635 5.04924C19.588 5.4552 20.0265 5.96146 20.3534 6.53854C20.6804 7.11561 20.8892 7.75197 20.9679 8.41055C21.0465 9.06913 20.9933 9.73677 20.8114 10.3746C20.6295 11.0124 20.3225 11.6077 19.9083 12.1257"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 19L19 22L16 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72264">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
