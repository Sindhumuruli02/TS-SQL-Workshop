
export interface Product {
    id: number;
    name: string;
}

export interface Review {
    id: number;
    productId: number;
    rating: number;
    comment: string;
}

export interface Feedback {
    addReview(review: Review): void;
    getReviewsByProduct(productId: number): Review[];
    getAverageRating(productId: number): number;
}

export class FeedbackImpl implements Feedback {
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
