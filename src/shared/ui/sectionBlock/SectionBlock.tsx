import React from 'react';

type SectionBlockProps = {
    children: React.ReactNode;
};

export const SectionBlock = ({ children }: SectionBlockProps) => {
    return (
        <div className="bg-white rounded-2xl mt-4">
            {children}
        </div>
    );
};
