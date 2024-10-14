'use strict';

/**
 * reading service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reading.reading');
