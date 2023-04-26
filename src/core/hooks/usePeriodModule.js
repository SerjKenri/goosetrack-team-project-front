import { useLocation } from 'react-router-dom';

const usePeriodModule = () => {
    const { pathname } = useLocation();
    const periodType = pathname.match(/\/(\w+)$/)[1];
    return periodType;
};

export { usePeriodModule };
