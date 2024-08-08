"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackImpl = void 0;
class FeedbackImpl {
    constructor() {
        this.reviews = [];
    }
    addReview(review) {
        this.reviews.push(review);
    }
    getReviewsByProduct(productId) {
        return this.reviews.filter(review => review.productId === productId);
    }
    getAverageRating(productId) {
        const productReviews = this.getReviewsByProduct(productId);
        const totalRating = productReviews.reduce((sum, review) => sum + review.rating, 0);
        return productReviews.length ? totalRating / productReviews.length : 0;
    }
}
exports.FeedbackImpl = FeedbackImpl;
