import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectUserName } from 'redux/auth/auth.selectors';
import { selectUserAvatar } from 'redux/auth/auth.selectors';
import { Avatar } from 'core/kit/Avatar';
import { UserInfoText } from 'core/kit/text';

export const UserInfo = () => {
    const avatar = useSelector(selectUserAvatar);
    const username = useSelector(selectUserName) || '';
    const mainLetter = username.substring(0, 1);
    return (
        <UserInfoContainer>
            <UserInfoText>{username}</UserInfoText>
            <Avatar size="32px" username={mainLetter} avatar={avatar} />
        </UserInfoContainer>
    );
};

const UserInfoContainer = styled.div(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
}));
