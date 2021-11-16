import axe from 'axe-core';
import { ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ReactElement } from 'react';

import { mountToDoc } from '../../.jest/jest-setup';
import { mockData } from '../mockData';
import { ColorListItem } from '../types/color';
import { ColorSwatch } from './ColorSwatch';

const setup = (
    render: (x: ReactElement) => ReactWrapper | ShallowWrapper,
    props: JSX.IntrinsicAttributes,
) => {
    const defaultProps: {
        colorsData: ColorListItem[] | null;
        onReset: () => void;
    } = {
        colorsData: mockData,
        onReset: jest.fn(),
    };
    const onClickSpy = jest.fn();

    const component = render(<ColorSwatch {...defaultProps} {...props} />);

    return {
        actual: component,
        onClickSpy,
    };
};

describe('ColorSwatch', () => {
    it('should match snapshot on first render', () => {
        const { actual } = setup(shallow, {});
        expect(toJson(actual)).toMatchSnapshot();
    });

    it('should match snapshot on empty data render', () => {
        const { actual } = setup(shallow, {});
        actual.setProps({ colorsData: null });
        expect(toJson(actual)).toMatchSnapshot();
    });

    it('has no accessibility violations', () => {
        const { actual } = setup(mountToDoc, {});
        const componentNode = actual.getDOMNode();

        axe.run(componentNode, (err, { violations }) => {
            expect(err).toBe(null);
            expect(violations).toHaveLength(0);
        });
    });
});
