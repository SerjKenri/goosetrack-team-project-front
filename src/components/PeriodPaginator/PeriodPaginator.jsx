import { Icon } from 'core/kit/Icon';
import { iconNames } from 'assets/icons/iconNames';
import React from 'react';
import styled from 'styled-components';

const PeriodPaginator = () => {
    return (
        <RootWrapper>
            <DateContainer>
                <DateButton>March 2023</DateButton>
            </DateContainer>
            <ArrowWrapper>
                <PeriodPaginatorLeft>
                    <Icon name={iconNames.chevronLeft} size="32" />
                </PeriodPaginatorLeft>
                <PeriodPaginatorRight>
                    <Icon name={iconNames.chevronRight} size="32" />
                </PeriodPaginatorRight>
            </ArrowWrapper>
        </RootWrapper>
    );
};

export { PeriodPaginator };

const RootWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    flex: none;
    gap: 8px;
    box-sizing: border-box;
`;

const DateContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex: none;
    gap: 149px;
    border-radius: 8px;
    background-color: rgb(62, 133, 243);
    box-sizing: border-box;
    padding: 8px 12px;
`;

const DateButton = styled.span`
    color: white;
    text-overflow: ellipsis;
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: initial;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
`;

const ArrowWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    border-radius: 8px;
    width: 76px;
    height: 34px;
    background-color: white;
    box-sizing: border-box;
    padding: 8px 12px;
    margin-left: 8px;
`;

const PeriodPaginatorLeft = styled.button`
    height: 34px;
    border: 1px solid rgba(220, 227, 229, 0.8);

    border-radius: 8px 0px 0px 8px;
    background-color: white;
    cursor: pointer;
`;

const PeriodPaginatorRight = styled.button`
    height: 34px;
    border: 1px solid rgba(220, 227, 229, 0.8);
    border: 1px solid rgba(220, 227, 229, 0.8);

    border-radius: 0px 8px 8px 0px;
    background-color: white;
    cursor: pointer;
`;
