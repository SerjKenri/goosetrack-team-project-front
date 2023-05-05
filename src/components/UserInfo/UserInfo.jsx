import { useSelector } from 'react-redux';
import { useState } from 'react';
import styled from 'styled-components';

import { selectUserName } from 'redux/auth/auth.selectors';
import { selectUserAvatar } from 'redux/auth/auth.selectors';
import { UserPopup } from 'components/UserPopup/UserPopup';
import { Avatar } from 'core/kit/Avatar';
import { UserInfoText } from 'core/kit/text';
import { useMatchMedia } from 'core/hooks/useMatchMedia';

export const UserInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isMobile } = useMatchMedia();
    const avatar = useSelector(selectUserAvatar);
    const username = useSelector(selectUserName) || '';
    const mainLetter = username.substring(0, 1);

    return (
        <>
            <UserInfoContainer onClick={() => setIsOpen(true)}>
                <UserNameText isMobile={isMobile}>{username}</UserNameText>
                <Avatar
                    size={isMobile ? '32px' : '44px'}
                    username={mainLetter}
                    avatar={avatar}
                />
            </UserInfoContainer>
            {isOpen && <UserPopup setIsOpen={setIsOpen} isOpen={isOpen} />}
        </>
    );
};

const UserInfoContainer = styled.div(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    position: 'relative',

    cursor: 'pointer',
}));
const UserNameText = styled(UserInfoText)(({ isMobile }) => ({
    fontSize: isMobile ? '14px' : ' 18px',
    lineHeight: '18px',
}));
