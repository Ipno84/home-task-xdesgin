import { createSelector } from 'reselect';
import getItemsSelector from './getItemsSelector';
import getOrderSelector from './getOrderSelector';
import getYearSelector from './getYearSelector';

export default createSelector(
    [getItemsSelector, getOrderSelector, getYearSelector],
    (items: Launch[], order: Order, year: string): Launch[] => {
        let filteredItems = [...items];
        if (year)
            filteredItems = filteredItems.filter((e) => e.launch_year === year);
        filteredItems.sort((a, b) =>
            order === 'asc'
                ? a.launch_date_unix - b.launch_date_unix
                : b.launch_date_unix - a.launch_date_unix
        );
        return filteredItems;
    }
);
