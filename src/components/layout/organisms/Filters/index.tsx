import React, { ReactElement } from 'react';

import FiltersContainer from '../../atoms/FiltersContainer';
import SelectYear from '../../organisms/SelectYear';
import SortButton from '../../molecules/SortButton';

/**
 * Components that renders all allows filters, year and sort button
 *
 * @returns {ReactElement}
 */
const Filters: React.FC = (): ReactElement => {
    return (
        <FiltersContainer>
            <SelectYear />
            <SortButton />
        </FiltersContainer>
    );
};

export default Filters;
