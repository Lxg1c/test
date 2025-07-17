'use client';
import BurgerMenu from "@/widgets/header/ui/BurgerMenu";

const Header = () => {
    return (
        <header id="header">
            <div className="header__container container">
                <div className='header__container-content px-[24px] py-[6px] flex justify-between items-center'>
                    <h2 className="font-normal text-[28px] text-[#7F7F7F] leading-[34px]">
                        Профиль
                    </h2>
                    <BurgerMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;