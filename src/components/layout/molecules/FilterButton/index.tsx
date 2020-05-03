import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import Props from './props';
import React from 'react';
import SelectedYear from '../SelectedYear';
import Span from '../../atoms/Span';
import { Store } from '../../../../../models/state/store';
import isLoadingSelector from './../../../../state/selectors/LaunchesSelectors/isLoadingSelector';
import { useSelector } from 'react-redux';

const FilterButton: React.FC<Props> = ({ onClick, buttonRef }) => {
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
