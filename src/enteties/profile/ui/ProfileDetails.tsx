interface ProfileDetailsProps {
    name: string;
    nickname: string;
    lastLogin: string | null;
}

export const ProfileDetails = ({ name, nickname, lastLogin }: ProfileDetailsProps) => {
    const formatTime = (isoString: string) => {
        const date = new Date(isoString);
        return date.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
    };

    return (
        <div className="mt-8 text-center">
            <h3 className='font-normal text-[22px] leading-[28px]'>
                румер: <span className='font-bold text-[28px] leading-[34px]'>{name}</span>
            </h3>
            <div className="mt-4 flex items-center justify-between">
                <p>@{nickname}</p>
                <p className='last_activity'>
                    Последняя активность: {lastLogin ? formatTime(lastLogin) : 'неизвестно'}
                </p>
            </div>
        </div>
    );
};
