'use strict';

/**
 * discounted-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::discounted-product.discounted-product');
