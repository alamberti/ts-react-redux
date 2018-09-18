import { insertIf } from './array-utils';

describe('Util: insertIf', () => {
    let isBaseball = false;
    test('When the condition is false', () => {
        const result = ['foo', 'bar', ...insertIf(isBaseball, 'bat'), 'baz'];
        const expectedResult = ['foo', 'bar', 'baz'];
        expect(result).toEqual(expectedResult);
    });

    test('When the condition is true', () => {
        isBaseball = true;
        const result = ['foo', 'bar', ...insertIf(isBaseball, 'bat'), 'baz'];
        const expectedResult = ['foo', 'bar', 'bat', 'baz'];
        expect(result).toEqual(expectedResult);
    });

    test('When multiple mixed type values are part of the same condition', () => {
        isBaseball = true;
        const result = [
            'foo',
            'bar',
            ...insertIf(isBaseball, 'bat', 42, true, { some: 'thing' }),
            'baz',
        ];
        const expectedResult = [
            'foo',
            'bar',
            'bat',
            42,
            true,
            { some: 'thing' },
            'baz',
        ];
        expect(result).toEqual(expectedResult);
    });
});
