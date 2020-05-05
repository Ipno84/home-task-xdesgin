import React, { ReactElement } from 'react';

import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import Props from './props';
import SelectedYear from '../SelectedYear';
import Span from '../../atoms/Span';
import { Store } from '../../../../../models/state/store';
import isLoadingSelector from './../../../../state/selectors/LaunchesSelectors/isLoadingSelector';
import { useSelector } from 'react-redux';

/**
 * Button that allows to filter launches by launch year
 *
 * @param {Props} {
 *     onClick,
 *     buttonRef,
 * }
 * @returns {ReactElement}
 */
const FilterButton: React.FC<Props> = ({
    onClick,
    buttonRef,
}: Props): ReactElement => {
    const isLoading = useSelector((state: Store) => isLoadingSelector(state));
    return (
        <Button disabled={isLoading} ref={buttonRef} onClick={onClick}>
            <Span>
                <Span hideSm={true}>Filter by</Span>
                <Span
                    hideSm={true}
                    dangerouslySetInnerHTML={{ __html: '&nbsp;' }}
                />
                <Span>Year</Span>
                <SelectedYear />
            </Span>
            <Icon icon='select' />
        </Button>
    );
};

export default FilterButton;
