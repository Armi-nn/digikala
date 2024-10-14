'use strict';

/**
 * reading controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::reading.reading');
