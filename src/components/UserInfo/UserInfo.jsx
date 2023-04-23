import { Avatar } from 'core/kit/Avatar';
import { UserInfoText } from 'core/kit/text';
import styled from 'styled-components';

export const UserInfo = () => {
    const name = 'Nadiia';
    const mainLetter = name.substr(0, 1);
    return (
        <UserInfoContainer>
            <UserInfoText>{name}</UserInfoText>
            <Avatar size="32px" disabled name={mainLetter} />
        </UserInfoContainer>
    );
};

const UserInfoContainer = styled.div(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
}));
