"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../model/model");
const readline = __importStar(require("readline-sync"));
function addProduct(products, id, name) {
    products.push({ id, name });
}
function addReview(feedback, id, productId, rating, comment) {
    feedback.addReview({ id, productId, rating, comment });
}
function main() {
    const products = [];
    const feedback = new model_1.FeedbackImpl();
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
