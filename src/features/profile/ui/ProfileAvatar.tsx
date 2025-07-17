import Image from "next/image";

interface ProfileAvatarProps {
    avatarUrl?: string;
}

export const ProfileAvatar = ({ avatarUrl }: ProfileAvatarProps) => {
    return avatarUrl ? (
        <img
            src={avatarUrl}
            width={180}
            height={180}
            alt="Аватар профиля"
            className="rounded-full object-cover border-4 border-white shadow-lg"
        />
    ) : (
        <div className="bg-gray-200 border-2 border-dashed rounded-full w-[180px] h-[180px] flex items-center justify-center">
            <span className="text-gray-500">Нет фото</span>
        </div>
    );
};
