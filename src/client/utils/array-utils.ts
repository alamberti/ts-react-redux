/**
 * A utility which allows for elements to be added conditionally to an array literal
 * The call MUST be spread
 * Example:
 * const myArray = [
 *      'test',
 *      ...insertIf(shouldInsert, { foo: 'bar' }, 124),
 *      'hello world',
 * ];
 * when shouldInsert === true --> myArray === ['test', { foo:'bar' }, 124, 'hello world']
 * when shouldInsert === false --> myArray === ['test', 'hello world']
 * @param condition - when elements should be added to the array
 * @param elements - n arity list of values to be added to the array when condition is met
 * @returns - a new array, either empty or created by the rest operator
 */
export function insertIf(condition: boolean, ...elements: any[]): any[] {
    return condition ? elements : [];
}
