import { useLocation } from 'react-router-dom';

const usePeriodModule = () => {
    const { pathname } = useLocation();

    const periodType = pathname.split(`/`)[2];

    return periodType;
};

export { usePeriodModule };
