import createConnector from '../core/createConnector';

/**
 * Stats connector provides the logic to build a widget that will
 *  displays algolia search statistics (hits number and processing time).
 * @name Stats
 * @kind HOC
 * @category connector
 * @providedPropType {number} nbHits - number of hits returned by Algolia.
 * @providedPropType {number} processingTimeMS - the time in ms took by Algolia to search for results.
 */
export default createConnector({
  displayName: 'AlgoliaStats',

  getProps(props, state, search) {
    if (!search.results) {
      return null;
    }
    return {
      nbHits: search.results.nbHits,
      processingTimeMS: search.results.processingTimeMS,
    };
  },
});