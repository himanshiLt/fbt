/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @generated SignedSource<<5f2f4bf4f285930f45ee900b29da576e>>
 *
 * Generated by LanguageCLDRGenScript
 *
 * @flow strict
 */

'use strict';

const IntlVariations = require('IntlVariations');

const IntlCLDRNumberType25 = {
  getVariation(n /*: number */) /*: $Values<typeof IntlVariations> */ {
    if (n === 1) {
      return IntlVariations.NUMBER_ONE;
    } else if (n >= 2 && n <= 4) {
      return IntlVariations.NUMBER_FEW;
    } else {
      return IntlVariations.NUMBER_OTHER;
    }
  }
};

module.exports = IntlCLDRNumberType25;
