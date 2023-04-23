import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Icon } from './Icon';
import { iconNames } from 'assets/icons/iconNames';

export const Avatar = ({ size, plusIcon, disabled = false }) => {
    const [value, setValue] = useState('');

    const handleChange = e => {
        const file = e.target.files[0];
        let blob = new Blob([file], { type: 'image/jpeg' });
        const objURL = URL.createObjectURL(blob);
        setValue(objURL);
    };
    return (
        <AvatarContainer size={size}>
            <AvatarInput
                id="file"
                type="file"
                onChange={handleChange}
                disabled={disabled}
            />
            <AvatarLabel htmlFor="file">
                {!value ? (
                    <UserIconWrapper>
                        <Icon
                            name={iconNames.avatar}
                            size="48px"
                            stroke="none"
                        />
                    </UserIconWrapper>
                ) : (
                    <AvatarImage src={value} alt="user avatar" />
                )}
            </AvatarLabel>
            {plusIcon && (
                <PlusIconWrapper>
                    <Icon name={iconNames.plus} size="18px" />
                </PlusIconWrapper>
            )}
        </AvatarContainer>
    );
};

Avatar.propTypes = {
    size: PropTypes.string.isRequired,
    plusIcon: PropTypes.bool,
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
const PlusIconWrapper = styled.div({
    position: 'absolute',
    bottom: '0',
    right: '10%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '24px',
    height: '24px',
    borderRadius: '50%',

    color: 'white',
    backgroundColor: '#3E85F3',
});
