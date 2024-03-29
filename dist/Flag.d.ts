import * as React from 'react';
interface Props {
    code: string;
    size?: string;
    gradient?: '' | 'top-down' | 'real-circular' | 'real-linear';
    hasBorder?: boolean;
    hasDropShadow?: boolean;
    hasBorderRadius?: boolean;
    className?: string;
}
declare const Flag: React.FC<Props>;
export default Flag;
