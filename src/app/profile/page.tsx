'use client';

import Header from '@/widgets/header/Header';
import Footer from '@/widgets/footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store';
import { useEffect } from 'react';
import { fetchProfile } from '@/enteties/profile/model';
import { ProfileHeader } from '@/features/profile/ui/ProfileHeader';
import { ProfileDetails } from '@/enteties/profile/ui/ProfileDetails';
import { ProfileStats } from '@/features/profile/ui/ProfileStats';
import { LocationAndSettings } from '@/widgets/profile/LocationAndSettings';
import { GameStatus } from '@/features/profile/ui/GameStatus';
import { GameButtons } from '@/widgets/GameButtons/GameButtons';
import {ButtonWithIcon} from "@/shared/ui/button/ButtonWithIcon";
import {SectionBlock} from "@/shared/ui/sectionBlock/SectionBlock";
import {Divider} from "@/shared/ui/divider/Divider";
import {ProfileAccessLinks} from "@/features/profile/ui/ProfileAccessLinks";
import {ProfileInfoLinks} from "@/features/profile/ui/ProfileInfoLinks";
import {AboutSection} from "@/features/profile/ui/ProfileAbout";


export default function ProfilePage() {
    const dispatch = useDispatch<AppDispatch>();
    const { profile, isLoading, error } = useSelector((state: RootState) => state.profile);

    useEffect(() => {
        dispatch(fetchProfile());
    }, [dispatch]);
    console.log(profile);

    if (isLoading) return <div className="min-h-screen flex items-center justify-center">Загрузка профиля...</div>;
    if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">Ошибка: {error}</div>;

    return (
        <div className="app min-h-screen flex flex-col">
            <Header />
            <main className="container flex-grow">
                <ProfileHeader avatarUrl={profile?.data?.avatar_url} />
                <ProfileDetails
                    name={profile?.data?.name || ''}
                    nickname={profile?.data?.nickname || ''}
                    lastLogin={profile?.data?.last_login_at || null}
                />
                <ProfileStats />
                <LocationAndSettings city={profile?.data?.city?.name} />
                <GameStatus />
                <GameButtons />

                <ButtonWithIcon
                    className="mt-4"
                    text="ИСТОРИЯ ВСТРЕЧ"
                    iconUrl="history.svg"
                    iconWidth={26}
                    iconHeight={28}
                />

                <SectionBlock>
                    <ButtonWithIcon
                        text="Публичный аккаунт"
                        iconUrl="public.svg"
                        iconWidth={36}
                        iconHeight={21}
                    />
                    <Divider />
                    <ButtonWithIcon
                        text="Взрослый"
                        iconUrl="adult.svg"
                        iconWidth={23}
                        iconHeight={23}
                    />
                </SectionBlock>

                <ProfileAccessLinks />

                <AboutSection about={profile?.data.about} telegram={profile?.data.telegram} />

                <ProfileInfoLinks />

                <ButtonWithIcon
                    className="mt-4"
                    text="Выйти из профиля"
                    iconUrl="exit.svg"
                    iconWidth={24}
                    iconHeight={28}
                />
            </main>
            <Footer />
        </div>
    );
}
