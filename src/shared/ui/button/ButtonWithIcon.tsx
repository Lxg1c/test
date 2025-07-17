import Image from 'next/image';
import React from 'react';

type ButtonWithIconProps = {
    text: string;
    iconUrl?: string;
    iconWidth?: number;
    iconHeight?: number;
    customIcon?: React.ReactNode; // ← добавлено
    onClick?: () => void;
    className?: string;
};

export const ButtonWithIcon = ({
                                   text,
                                   iconUrl,
                                   iconWidth,
                                   iconHeight,
                                   customIcon,
                                   onClick,
                                   className = ''
                               }: ButtonWithIconProps) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center cursor-pointer gap-4 w-full bg-white rounded-2xl p-4 ${className}`}
        >
            {customIcon ? (
                customIcon
            ) : (
                iconUrl && (
                    <Image src={iconUrl} alt={text} width={iconWidth} height={iconHeight} />
                )
            )}
            <h3 className="font-normal leading-[25px] text-[20px]">{text}</h3>
        </button>
    );
};
