import { iconNames } from "assets/icons/iconNames"
import { Button, ButtonDifference } from "core/kit/Button"
import { useTranslation } from 'react-i18next';
import propTypes from 'prop-types';

const AddTaskBtn = ({ onClick }) => {
const { t } = useTranslation();
    
    return (
        <Button
            onClick={onClick}
            differentStyles={ButtonDifference.addTask}
            iconName={iconNames.plus}
            iconSize={'20px'}
            title={t('calendarPage.action.add')}
        />
    );
}
 
export { AddTaskBtn }

AddTaskBtn.propTypes = {
    onClick: propTypes.func.isRequired,
};