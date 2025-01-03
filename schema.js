const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        // location: Joi.string().required(),
        location: Joi.array().items(Joi.string()).required(),  // Location as an array of strings
        // country: Joi.string().required(),
        country: Joi.array().items(Joi.string()).required(),
        price: Joi.number().required().min(0),
        // image: Joi.string().allow("", null)
        image: Joi.object({
            url: Joi.string().allow("", null),   // Allowing empty or null values
            filename: Joi.string().allow("", null)
          }).allow(null)  // The whole object can be null          
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required(),
});
