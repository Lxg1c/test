import axios from "axios";
import { ProfileData } from "@/enteties/profile/types";
import {z} from "zod";

const ProfileDataSchema = z.object({
    data: z.object({
        about: z.string(),
        account_status: z.string(),
        age: z.number(),
        avatar_url: z.string(),
        calling_limit: z.number(),
        city: z.object({
            id: z.string(),
            name: z.string(),
        }),
        created_at: z.string(),
        going_limit: z.number(),
        id: z.string(),
        last_login_at: z.string(),
        name: z.string(),
        nickname: z.string(),
        points: z.number(),
        role: z.string(),
        telegram: z.string(),
        updated_at: z.string(),
    })
});


export const getProfileInfo = async (): Promise<ProfileData | null> => {
    try {
        const { data } = await axios.get("https://igroom.ru/api/v2/profile/5e800be0-088e-41cb-b549-10ebf4a13591");

        const parsedData = ProfileDataSchema.safeParse(data);

        if (!parsedData.success) {
            console.error("Ошибка валидации профиля:", parsedData.error);
            return null;
        }

        return data;
    } catch (e) {
        console.error(e);
        return null;
    }
};
