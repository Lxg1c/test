import axios from "axios";
import {ProfileData} from "@/enteties/profile/types";

export const getProfileInfo = async (): Promise<ProfileData | null> => {
    try {
        const { data } = await axios.get<ProfileData>(
            "https://igroom.ru/api/v2/profile/5e800be0-088e-41cb-b549-10ebf4a13591"
        );
        return data;
    } catch (e) {
        console.error(e);
        return null;
    }
};
