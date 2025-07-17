"use client";

export default function BurgerMenu() {
    return (
        <div>
            <button
                className="p-2 focus:outline-none flex flex-col gap-1 cursor-pointer"
                aria-label="Меню"
            >
                <span className='block w-[29px] h-[5px] rounded-2xl bg-[#7F7F7F] transition-all'></span>
                <span className='block w-[29px] h-[5px] rounded-2xl bg-[#7F7F7F] transition-all'></span>
                <span className='block w-[29px] h-[5px] rounded-2xl bg-[#7F7F7F] transition-all'></span>
            </button>
        </div>
    );
}