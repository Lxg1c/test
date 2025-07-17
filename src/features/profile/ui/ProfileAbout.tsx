'use client';

import { useState, useRef, useEffect } from 'react';
import { Divider } from '@/shared/ui/divider/Divider';
import Image from 'next/image';

interface AboutSectionProps {
    about?: string;
    telegram?: string;
}

export const AboutSection = ({ about = '', telegram = '' }: AboutSectionProps) => {
    const [isClamped, setIsClamped] = useState(false);
    const aboutRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const el = aboutRef.current;
        if (el) {
            setIsClamped(el.scrollHeight > el.clientHeight);
        }
    }, [about]);

    return (
        <div className="bg-white rounded-2xl p-4 mt-4">
            <div className="relative mb-4">
                <p
                    ref={aboutRef}
                    className="font-normal text-[17px] leading-[22px] line-clamp-4 pr-8"
                >
                    {about}
                </p>
                {isClamped && (
                    <button
                        aria-label="Развернуть описание"
                        className="absolute top-0 right-0 w-6 h-full flex items-center justify-end"
                    >
                        <Image className='cursor-pointer' src="/vector.svg" alt="Развернуть" width={13} height={21} />
                    </button>
                )}
            </div>

            <Divider />

            <div className="flex justify-between items-center mt-4">
                <p className="font-normal text-[17px] leading-[22px]">Мой телеграмм</p>
                <span className="font-bold text-[17px] leading-[22px]">{telegram}</span>
            </div>
        </div>
    );
};
