import Image from "next/image";

const items = [
    { icon: "subscribe.svg", label: "Мои подписки" },
    { icon: "blackList.svg", label: "Черный список" },
    { icon: "bookmark.svg", label: "Закладки" },
];

export const ProfileMenu = () => (
    <div className="space-y-4">
        {items.map(({ icon, label }, i) => (
                <div key={label} className="bg-white rounded-2xl p-4">
            <button className="flex items-center gap-4 w-full cursor-pointer">
            <Image src={icon} alt={label} width={24} height={24} />
<h3 className="font-normal leading-[25px] text-[20px]">{label}</h3>
    </button>
{i < items.length - 2 && <div className="border-t border-[#D0D0D0] mx-2 mt-4" />}
</div>
))}
</div>
);
