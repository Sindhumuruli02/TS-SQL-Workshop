import * as readline from 'readline-sync';


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

function addProduct(products: Product[], id: number, name: string): void {
    products.push({ id, name });
}


function addReview(feedback: Feedback, id: number, productId: number, rating: number, comment: string): void {
    feedback.addReview({ id, productId, rating, comment });
}


function main() {
    const products: Product[] = [];
    const feedback: Feedback = new FeedbackImpl();

    
    const productId = parseInt(readline.question("Enter product ID: "));
    const productName = readline.question("Enter product name: ");
    addProduct(products, productId, productName);

  
    const reviewId = parseInt(readline.question("Enter review ID: "));
    const reviewProductId = parseInt(readline.question("Enter product ID for review: "));
    const rating = parseInt(readline.question("Enter rating (0-5): "));
    const comment = readline.question("Enter comment: ");
    addReview(feedback, reviewId, reviewProductId, rating, comment);

   
    console.log(`Reviews for ${productName}:`);
    feedback.getReviewsByProduct(productId).forEach(review => console.log(review.comment));

    console.log(`Average rating for ${productName}:`, feedback.getAverageRating(productId));
}

main();


