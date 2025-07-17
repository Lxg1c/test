import Image from "next/image";

export const ProfileButtons = () => (
    <nav className="flex-shrink-0">
        <ul className="flex flex-col gap-4">
            <li className='flex justify-center'>
                <Image src='share.svg' alt="Поделиться" width={27} height={41} className="cursor-pointer" />
            </li>
            <li className='flex justify-center'>
                <Image src='me.svg' width={53} height={45} alt="Это ты" className="cursor-pointer" />
            </li>
            <li>
                <Image src='cotum.svg' alt="Котум" width={99} height={54} className="cursor-pointer" />
            </li>
        </ul>
    </nav>
);
