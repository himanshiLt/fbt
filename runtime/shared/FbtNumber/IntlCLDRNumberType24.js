/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @generated SignedSource<<fa268caba9e75e971dc6f0d3e3e9e27f>>
 *
 * Generated by LanguageCLDRGenScript
 *
 * @flow strict
 */

'use strict';

const IntlVariations = require('IntlVariations');

const IntlCLDRNumberType24 = {
  getVariation(n /*: number */) /*: $Values<typeof IntlVariations> */ {
    if (n === 1) {
      return IntlVariations.NUMBER_ONE;
    } else if (n === 2) {
      return IntlVariations.NUMBER_TWO;
    } else if ((n < 0 || n > 10) && n % 10 === 0) {
      return IntlVariations.NUMBER_MANY;
    } else {
      return IntlVariations.NUMBER_OTHER;
    }
  }
};

module.exports = IntlCLDRNumberType24;
