/**
 * (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.
 *
 * @emails oncall+i18n_fbt_js
 * @flow strict-local
 * @format
 */
import type {IntlVariationsEnum} from 'IntlVariations';

import {NUMBER_ONE, NUMBER_OTHER} from 'IntlVariations';

const FbtNumberType = {
  getVariation: (jest.fn<$ReadOnlyArray<number>, IntlVariationsEnum>(
    (n: number) =>
      // English plural rules (AKA IntlCLDRNumberType05 in CLDR v34)
      n === 1 ? NUMBER_ONE : NUMBER_OTHER,
  ): JestMockFn<$ReadOnlyArray<number>, IntlVariationsEnum>),
};

export default FbtNumberType;
