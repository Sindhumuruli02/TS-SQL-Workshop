var FeedbackImpl = /** @class */ (function () {
    function FeedbackImpl() {
        this.reviews = [];
    }
    FeedbackImpl.prototype.addReview = function (review) {
        this.reviews.push(review);
    };
    FeedbackImpl.prototype.getReviewsByProduct = function (productId) {
        return this.reviews.filter(function (review) { return review.productId === productId; });
    };
    FeedbackImpl.prototype.getAverageRating = function (productId) {
        var productReviews = this.getReviewsByProduct(productId);
        var totalRating = productReviews.reduce(function (sum, review) { return sum + review.rating; }, 0);
        return productReviews.length ? totalRating / productReviews.length : 0;
    };
    return FeedbackImpl;
}());
var Dress = { id: 1, name: "Dress" };
var Jeans = { id: 2, name: "Jeans" };
var feedback = new FeedbackImpl();
feedback.addReview({ id: 1, productId: 1, rating: 5, comment: "Excellent product!" });
feedback.addReview({ id: 2, productId: 1, rating: 4, comment: "Very good." });
feedback.addReview({ id: 3, productId: 2, rating: 3, comment: "Average product." });
console.log("Reviews for Dress:");
feedback.getReviewsByProduct(1).forEach(function (review) { return console.log(review.comment); });
console.log("Average rating for Dress:", feedback.getAverageRating(1));
