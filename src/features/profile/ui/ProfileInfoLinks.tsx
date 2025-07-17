import { ButtonWithIcon } from "@/shared/ui/button/ButtonWithIcon";
import { Divider } from "@/shared/ui/divider/Divider";
import { SectionBlock } from "@/shared/ui/sectionBlock/SectionBlock";

const DotIcon = () => (
    <span className="bg-[#A7A7A7] rounded-full h-3 w-3 inline-block" />
);

export const ProfileInfoLinks = () => {
    return (
        <SectionBlock>
            <ButtonWithIcon text="Возможности ИГРУМА" customIcon={<DotIcon />} />
            <Divider />
            <ButtonWithIcon text="Правила ИГРУМА" customIcon={<DotIcon />} />
            <Divider />
            <ButtonWithIcon text="Инструкция РУМЕРА" customIcon={<DotIcon />} />
            <Divider />
            <ButtonWithIcon text="Инструкция МАСТЕРА" customIcon={<DotIcon />} />
            <Divider />
            <ButtonWithIcon text="Инструкция МЕСТА" customIcon={<DotIcon />} />
            <Divider />
            <ButtonWithIcon text="Пользовательское соглашение" customIcon={<DotIcon />} />
        </SectionBlock>
    );
};
