interface Product {
    id: number;
    name: string;
}

interface Review {
    id: number;
    productId: number;
    rating: number;
    comment: string;
}

interface Feedback {

    addReview(review: Review): void;
    getReviewsByProduct(productId: number): Review[];
    getAverageRating(productId: number): number;
}

class FeedbackImpl implements Feedback {
    private reviews: Review[] = [];

    addReview(review: Review): void {
        this.reviews.push(review);
    }

    getReviewsByProduct(productId: number): Review[] {
        return this.reviews.filter(review => review.productId === productId);
    }

    getAverageRating(productId: number): number {
        const productReviews = this.getReviewsByProduct(productId);
        const totalRating = productReviews.reduce((sum, review) => sum + review.rating, 0);
        return productReviews.length ? totalRating / productReviews.length : 0;
    }
}


const Dress: Product = { id: 1, name: "Dress" };
const Jeans: Product = { id: 2, name: "Jeans" };
const p3: Product = { id: 3, name: "p3" };
const p4: Product = { id: 4, name: "p4" };
const p5: Product = { id: 5, name: "p5" };
const p6: Product = { id: 6, name: "p6" };
const p7: Product = { id: 7, name: "p7" };
const p8: Product = { id: 8, name: "p8" };
const p9: Product = { id: 9, name: "p9" };
const p10: Product = { id: 10, name: "p10" };

const feedback: Feedback = new FeedbackImpl();
feedback.addReview({ id: 1, productId: 1, rating: 5, comment: "Excellent product!" });
feedback.addReview({ id: 2, productId: 2, rating: 4, comment: "Very good." });
feedback.addReview({ id: 3, productId: 3, rating: 3, comment: "Average product." });
feedback.addReview({ id: 4, productId: 4, rating: 3, comment: "Average product." });
feedback.addReview({ id: 5, productId: 5, rating: 2, comment: "Poor product." });
feedback.addReview({ id: 6, productId: 6, rating: 3, comment: "Average product." });
feedback.addReview({ id: 7, productId: 7, rating: 1, comment: "Bad product." });
feedback.addReview({ id: 8, productId: 8, rating: 3, comment: "Average product." });
feedback.addReview({ id: 9, productId: 9, rating: 3, comment: "Average product." });
feedback.addReview({ id: 10, productId: 10, rating: 2, comment: "Bad product." });


console.log("Reviews for Dress:");
feedback.getReviewsByProduct(1).forEach(review => console.log(review.comment));

console.log("Average rating for Dress:", feedback.getAverageRating(1));


