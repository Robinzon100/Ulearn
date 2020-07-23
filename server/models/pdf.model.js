class Pdf{
    constructor(title, author, language, isFeatured, fileUrl, thumbnailImageUrl, pdfDate){
        this.title = title; 
        this.author = author; 
        this.language = language;
        this.isFeatured = isFeatured;  
        this.fileUrl = fileUrl; 
        this.thumbnailImageUrl = thumbnailImageUrl;
        this.pdfDate = pdfDate;
        this.createdAt = Date(); 
    }
}



module.exports = Pdf;