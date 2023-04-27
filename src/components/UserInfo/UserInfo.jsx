import { Avatar } from 'core/kit/Avatar';
import { UserInfoText } from 'core/kit/text';
import styled from 'styled-components';

export const UserInfo = () => {
    const username = 'Nadiia';
    const mainLetter = username.substr(0, 1);
    return (
        <UserInfoContainer>
            <UserInfoText>{username}</UserInfoText>
            <Avatar size="32px" username={mainLetter} avatar="" />
        </UserInfoContainer>
    );
};

const UserInfoContainer = styled.div(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
}));
