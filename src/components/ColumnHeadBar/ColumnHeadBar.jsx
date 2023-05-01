import { iconNames } from 'assets/icons/iconNames';
import { IconButton } from 'core/kit/IconButton';

import propTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const titles = {
    toDo: 'To Do',
    inProgress: 'In Progress',
    done: 'Done',
};

const ColumnHeadBar = ({ title, onClick ,...rest}) => {
    const { t } = useTranslation();
    const primaryKeys = Object.keys(titles);
    const columnTitle = primaryKeys.includes(title)
        ? t(`calendarPage.columns.title.${title}`)
        : title;

    return (
        <Wrapper {...rest}>
            <TextH2>{columnTitle}</TextH2>
            <IconButton
                onClick={onClick}
                buttonSize={20}
                iconName={iconNames.plusCircle}
            />
        </Wrapper>
    );
};

export { ColumnHeadBar };

ColumnHeadBar.propTypes = {
    onClick: propTypes.func.isRequired,
    title: propTypes.string.isRequired,
};

const Wrapper = styled.div(({ theme, isDragging }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.space.x2}px ${theme.space.x0}px`,
    // backgroundColor: isDragging ? theme.color.accentColor:'transparent',
    transition: 'background-color 0.2s ease',

    // '&:hover': {
    //     backgroundColor: theme.color.accentColor,
    // },
}));

const TextH2 = styled.h2(({ theme }) => ({
    fontWeight: 700,
    fontSize: theme.space.x5 + 'px',
    lineHeight: theme.space.x6 + 'px',
    color: theme.color.mainTextColor,
}));
