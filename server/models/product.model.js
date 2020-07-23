class Product {
    constructor(productTitle, imageUrl, content, categoryId, countryId) {
        this.productTitle = productTitle;
        this.imageUrl = imageUrl;
        this.content = content;
        this.categoryId = categoryId
        this.countryId = countryId

        this.createdAt = Date();
    }
}



module.exports = Product;