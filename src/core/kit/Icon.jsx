import styled from 'styled-components';
import propTypes from 'prop-types';
import icons from '../../assets/icons/icons.svg';
import { iconNames } from 'assets/icons/iconNames';

const NewIcon = styled.svg(() => ({
    stroke: 'currentcolor',
}));

export const Icon = ({ name, size }) => {
    const iconLink = `${icons}#${name}`;

    return (
        <NewIcon width={size} height={size}>
            <use href={iconLink}></use>
        </NewIcon>
    );
};

Icon.propTypes = {
    name: propTypes.oneOf(Object.values(iconNames)).isRequired,
    size: propTypes.string.isRequired,
};
