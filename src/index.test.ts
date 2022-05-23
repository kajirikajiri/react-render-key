import { appendKey } from ".";

const testCases = [
    {
        testName: "not has option",
        object: { name: 'Tom' },
        option: undefined,
        expected: {
            name: 'Tom',
            key: 'key'
        },
    },
    {
        testName: "has option",
        object: { name: 'Tom' },
        option: {
            keyName: 'example'
        },
        expected: {
            name: 'Tom',
            example: 'key'
        },
    },
    {
        testName: "undefined",
        object: undefined,
        option: undefined,
        expected: {
            key: 'key'
        },
    },
    {
        testName: "null",
        object: null,
        option: undefined,
        expected: {
            key: 'key'
        },
    },
    {
        testName: "empty array",
        object: [],
        option: undefined,
        expected: {
            key: 'key'
        },
    },
    {
        testName: "empty object",
        object: {},
        option: undefined,
        expected: {
            key: 'key'
        },
    },
]

describe.each(testCases)(`appendKey`, ({
    testName,
    object,
    option,
    expected,
}) => {
    test(testName, () => {
        const result = appendKey(object, option)
        expect(result).toEqual(expected);
    });
})
