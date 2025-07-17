export const ProfileStats = () => (
    <div className='flex justify-between items-center mt-4'>
        <div className="relative px-4 after:absolute after:-right-3 after:top-1/2 after:-translate-y-1/2 after:h-8 after:w-px after:bg-[#434343]">
            <p className='font-bold text-[24px] leading-[22px]'>1 месяц</p>
            <p className='font-normal text-[18px] leading-[22px]'>в игруме</p>
        </div>
        <div className="relative px-4 after:absolute after:-right-3 after:top-1/2 after:-translate-y-1/2 after:h-8 after:w-px after:bg-[#434343]">
            <p className='font-bold text-[24px] leading-[22px]'>15</p>
            <p className='font-normal text-[18px] leading-[22px]'>встреч</p>
        </div>
        <div>
            <p className='font-bold text-[24px] leading-[22px]'>350</p>
            <p className='font-normal text-[18px] leading-[22px]'>румеров</p>
        </div>
    </div>
);
