import Image from "next/image";
import { ProfileAvatar } from "./ProfileAvatar";
import { ShareButtons } from "../../../widgets/shareButtons/ShareButtons";

type Props = {
    avatarUrl?: string;
};

export const ProfileHeader = ({ avatarUrl }: Props) => (
    <div className="flex items-start justify-center mt-[50px] gap-4 relative">
        <div className="flex-shrink-0 absolute top-0 left-0">
            <Image src="back.svg" width={18} height={32} alt="Назад" className="cursor-pointer" />
        </div>

        <div className="flex-grow flex justify-center">
            <ProfileAvatar avatarUrl={avatarUrl} />
        </div>

        <div className="absolute top-0 right-0">
            <ShareButtons />
        </div>
    </div>
);
