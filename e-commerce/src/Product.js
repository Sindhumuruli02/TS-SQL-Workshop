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
function addProduct(products, id, name) {
    products.push({ id: id, name: name });
}
function addReview(feedback, id, productId, rating, comment) {
    feedback.addReview({ id: id, productId: productId, rating: rating, comment: comment });
}
function getUserInput(prompt) {
    var inputs = {
        "Enter product ID:": "1",
        "Enter product name:": "Smartphone",
        "Enter review ID:": "1",
        "Enter product ID for review:": "1",
        "Enter rating (0-5):": "5",
        "Enter comment:": "Excellent product!"
    };
    return inputs[prompt];
}
function main() {
    var products = [];
    var feedback = new FeedbackImpl();
    var productId = parseInt(getUserInput("Enter product ID:"));
    var productName = getUserInput("Enter product name:");
    addProduct(products, productId, productName);
    var reviewId = parseInt(getUserInput("Enter review ID:"));
    var reviewProductId = parseInt(getUserInput("Enter product ID for review:"));
    var rating = parseInt(getUserInput("Enter rating (0-5):"));
    var comment = getUserInput("Enter comment:");
    addReview(feedback, reviewId, reviewProductId, rating, comment);
    console.log("Reviews for ".concat(productName, ":"));
    feedback.getReviewsByProduct(productId).forEach(function (review) { return console.log(review.comment); });
    console.log("Average rating for ".concat(productName, ":"), feedback.getAverageRating(productId));
}
main();
