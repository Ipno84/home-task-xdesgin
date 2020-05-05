import { ItemProps, Option, TriggerProps } from './props';
import {
    Matcher,
    MatcherOptions,
    cleanup,
    fireEvent,
    render,
} from '@testing-library/react';

import Button from '../../atoms/Button';
import React from 'react';
import Select from '.';
import SelectItem from '../../atoms/SelectItem';
import ThemeConstants from '../../../../constants/ThemeConstants';
import { ThemeProvider } from 'styled-components';
import _ from '@testing-library/react';

describe('Select emulation', () => {
    let testRender;
    let getByTestId: (
        text: Matcher,
        options?: MatcherOptions | undefined,
        waitForElementOptions?: unknown
    ) => HTMLElement;
    beforeEach(() => {
        cleanup();
        testRender = render(
            <ThemeProvider theme={ThemeConstants}>
                <Select
                    trigger={Button as React.FC<TriggerProps>}
                    item={SelectItem as React.FC<ItemProps>}
                    options={[
                        { optionKey: '', label: 'None' },
                        ...[{ optionKey: '2006', label: '2006' }],
                    ]}
                    onSelectOption={(option: Option) => console.log(option)}
                />
            </ThemeProvider>
        );
        getByTestId = testRender.getByTestId;
    });
    test('Initial Position', () => {
        const selectContainer: HTMLElement = getByTestId('selectContainer');
        const selectContainerStyle: CSSStyleDeclaration = window.getComputedStyle(
            selectContainer
        );
        expect(selectContainer).toBeInTheDocument();
        expect(selectContainerStyle.top).toBe('200%');
        expect(selectContainerStyle.opacity).toBe('0');
        expect(selectContainerStyle.pointerEvents).toBe('none');
    });

    test('Trigger Component click', () => {
        const selectTrigger = getByTestId('selectTrigger');
        expect(selectTrigger).toBeInTheDocument();
        fireEvent(
            selectTrigger,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        );
        const selectContainer: HTMLElement = getByTestId('selectContainer');
        const selectContainerStyle: CSSStyleDeclaration = window.getComputedStyle(
            selectContainer
        );
        expect(selectContainerStyle.top).toBe('80%');
        expect(selectContainerStyle.opacity).toBe('1');
        expect(selectContainerStyle.pointerEvents).toBe('auto');
    });
});
