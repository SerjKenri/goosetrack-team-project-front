import styled from 'styled-components';
import PropTypes from 'prop-types';

import { TextH2 } from './text';

export const Avatar = ({ size, avatar, username }) => {
    return (
        <AvatarContainer size={size}>
            <AvatarInput id="file" type="file" disabled />
            <AvatarLabel htmlFor="file">
                {!avatar ? (
                    <UserIconWrapper>
                        <TextH2>{username}</TextH2>
                    </UserIconWrapper>
                ) : (
                    <AvatarImage src={avatar} alt="user avatar" />
                )}
            </AvatarLabel>
        </AvatarContainer>
    );
};

Avatar.propTypes = {
    size: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    username: PropTypes.string,
};

const AvatarContainer = styled.div(({ size }) => ({
    position: 'relative',

    width: size,
    height: size,

    borderRadius: '50%',
    border: '2px solid #3E85F3',
}));

const AvatarInput = styled.input({
    visibility: 'hidden',
    position: 'absolute',
    width: '1px',
    height: '1px',
    margin: '-1px',
    border: 0,
    padding: 0,

    whiteSpace: 'nowrap',
    clipPath: 'inset(100%)',
    clip: 'rect(0 0 0 0)',
    overflow: 'hidden',
});
const AvatarLabel = styled.label({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',

    width: 'inherit',
    height: 'inherit',
    borderRadius: '50%',
});
const UserIconWrapper = styled.div({
    width: 'inherit',
    height: 'inherit',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    color: '#3E85F3',
});
const AvatarImage = styled.img({
    width: 'inherit',
    height: 'inherit',
    borderRadius: '50%',

    objectFit: 'cover',
});
