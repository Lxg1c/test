import Image from "next/image";

export const LocationAndSettings = ({ city }: { city?: string }) => (
    <div className="flex justify-between items-center mt-4">
        <div className="rounded-full bg-white px-15 py-4 text-[22px] leading-[28px] font-normal">
            {city}
        </div>

        <button className="flex items-center justify-center border-3 gap-1 border-[#7F7F7F] cursor-pointer bg-white rounded-full py-4 px-4">
            <Image src="settings.svg" alt="Редактирование" width={31} height={30} />
            РЕДАКТ
        </button>
    </div>
);
