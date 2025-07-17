interface ProfileDetailsProps {
    name: string;
    nickname: string;
    lastLogin: string | null;
}

export const ProfileDetails = ({ name, nickname, lastLogin }: ProfileDetailsProps) => {
    const formatTime = (isoString: string) => {
        const date = new Date(isoString);
        const now = new Date();

        const time = date.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });

        const dateOnly = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

        const today = dateOnly(now);
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);

        const loginDate = dateOnly(date);

        if (loginDate.getTime() === today.getTime()) {
            return `Сегодня ${time}`;
        } else if (loginDate.getTime() === yesterday.getTime()) {
            return `Вчера ${time}`;
        } else {
            return date.toLocaleDateString('ru-RU', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            });
        }
    };

    return (
        <div className="mt-8 text-center">
            <h3 className='font-normal text-[22px] leading-[28px]'>
                румер: <span className='font-bold text-[28px] leading-[34px]'>{name}</span>
            </h3>
            <div className="mt-4 flex items-center justify-between">
                <p>@{nickname}</p>
                <p className='last_activity'>
                    {lastLogin ? formatTime(lastLogin) : 'неизвестно'}
                </p>
            </div>
        </div>
    );
};
