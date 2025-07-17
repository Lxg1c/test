import { ButtonWithIcon } from "@/shared/ui/button/ButtonWithIcon";
import { Divider } from "@/shared/ui/divider/Divider";
import { SectionBlock } from "@/shared/ui/sectionBlock/SectionBlock";

export const ProfileAccessLinks = () => {
    return (
        <SectionBlock>
            <ButtonWithIcon
                text="Мои подписки"
                iconUrl="subscribe.svg"
                iconWidth={26}
                iconHeight={19}
            />
            <Divider />
            <ButtonWithIcon
                text="Черный список"
                iconUrl="blackList.svg"
                iconWidth={23}
                iconHeight={22}
            />
            <Divider />
            <ButtonWithIcon
                text="Закладки"
                iconUrl="bookmark.svg"
                iconWidth={18}
                iconHeight={20}
            />
        </SectionBlock>
    );
};
