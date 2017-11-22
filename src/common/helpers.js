import _ from 'lodash';

/**
 * Recursive function to organize Store's data into an Array sorted
 * by each element's nextStage value
 * @param originalArr
 * @param newArr
 * @param item current element
 */
export function findNextInChain(originalArr, newArr, item) {
    if (item.nextStage) {
        const next = _.find(originalArr, ['id', item.nextStage]);
        newArr.push(next);
        return findNextInChain(originalArr, newArr, next);
    }
}
