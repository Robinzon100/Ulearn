class News{
    constructor(title, description, isFeatured, link, imageUrl, newsDate){
        this.title = title; 
        this.description = description; 
        this.isFeatured = isFeatured; 
        this.link = link; 
        this.imageUrl = imageUrl; 
        this.newsDate = newsDate; 
        this.createdAt = Date(); 
    }
}



module.exports = News;