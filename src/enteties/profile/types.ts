export type ProfileData = {
    data: {
        id: string;
        role: string;
        name: string;
        nickname: string;
        avatar_url: string;
        age: number;
    };
    city: {
        id: string;
        name: string;
    };
    is_private: boolean;
    telegram_id: string;
    about: string;
    points: number;
    calling_limit: number;
    going_limit: number;
    account_status: string;
    last_login_at: string;
    created_at: string;
    updated_at: string;
};