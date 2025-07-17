import Image from "next/image";

export const GameStatus = () => (
    <div className="bg-white rounded-2xl mt-4 p-4">
        {["зовы", "иду"].map((label, i) => (
            <div key={label}>
                <button className="flex justify-between items-center w-full py-2 cursor-pointer">
                    <div className="flex items-center gap-2">
                        <span className={`rounded-full h-3 w-3 ${i === 0 ? "bg-[#00CF00]" : "bg-[#FFA100]"}`}></span>
                        <span className="font-normal text-[20px] leading-[25px]">{label}</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="rounded-full px-[8px] py-[1px] text-[#434343] bg-[#D0D0D0]">{i + 2}</span>
                        <Image src="dropdown.svg" alt="Открыть" width={32} height={18} />
                    </div>
                </button>
                {i === 0 && <div className="border-t border-[#D0D0D0] mx-2" />}
            </div>
        ))}
    </div>
);
