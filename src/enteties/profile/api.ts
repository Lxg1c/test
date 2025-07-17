// api.ts
import axios from "axios";
import { z } from "zod";

// Опишем схему для profile
const ProfileDataSchema = z.object({
    data: z.object({
        id: z.string(),
        role: z.string(),
        name: z.string(),
        nickname: z.string(),
        avatar_url: z.string(),
        age: z.number(),
    }),
    city: z.object({
        id: z.string(),
        name: z.string(),
    }),
    is_private: z.boolean(),
    telegram_id: z.string(),
    about: z.string(),
    points: z.number(),
    calling_limit: z.number(),
    going_limit: z.number(),
    account_status: z.string(),
    last_login_at: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
});

// Тип из схемы (опционально, если хочешь, чтобы ts автоматически подхватил)
export type ProfileData = z.infer<typeof ProfileDataSchema>;

export const getProfileInfo = async (): Promise<ProfileData | null> => {
    try {
        const { data } = await axios.get("https://igroom.ru/api/v2/profile/5e800be0-088e-41cb-b549-10ebf4a13591");

        // Валидация
        const parsedData = ProfileDataSchema.safeParse(data);

        if (!parsedData.success) {
            console.error("Ошибка валидации профиля:", parsedData.error);
            return null;
        }

        return parsedData.data;
    } catch (e) {
        console.error(e);
        return null;
    }
};
