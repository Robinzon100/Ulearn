class NewPage {
    constructor(title, menuTitle, content, imageUrl) {
        this.title = title;
        this.menuTitle = menuTitle;
        this.content = content;
        this.imageUrl = imageUrl;

        this.createdAt = Date();
    }
}



module.exports = NewPage;