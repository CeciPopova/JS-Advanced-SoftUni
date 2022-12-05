class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            "picture": 200,
            "photo": 50,
            "item": 250
        }
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle( articleModel, articleName, quantity ){
        if (articleModel.toLowerCase() !== 'picture' && articleModel.toLowerCase() !== 'photo' && articleModel.toLowerCase() !== 'item') {
           throw new Error("This article model is not included in this gallery!") 
        }
       
        let currArticle = this.listOfArticles.find(a => a.articleName === articleName);
        if (currArticle) {
            if (currArticle.articleModel.toLowerCase() === articleModel) {
                currArticle.quantity += quantity;
            }
           
        }else{
            articleModel = articleModel.toLowerCase();
            let article = {
                articleModel,
                articleName,
                quantity
            }
            this.listOfArticles.push(article);
            
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`

    }
    inviteGuest ( guestName, personality){
        let currGuest = this.guests.find(g => g.guestName === guestName);
        if (currGuest) {
            throw new Error(`${guestName} has already been invited.`)
        }else{
            let guest = {};
            if (personality === 'Vip') {
                guest = {
                    guestName,
                    points: 500,
                    purchaseArticle: 0
                }
            }else if(personality === 'Middle'){
                guest = {
                    guestName,
                    points: 250,
                    purchaseArticle: 0
                }
            }else{
                guest = {
                    guestName,
                    points: 50,
                    purchaseArticle: 0
                }
            }
            this.guests.push(guest)
            return `You have successfully invited ${guestName}!`;
        }

    }
    buyArticle ( articleModel, articleName, guestName){
        let currArticle = this.listOfArticles.find(a => a.articleName === articleName && a.articleModel === articleModel);

        if (!currArticle) {
           throw new Error("This article is not found.");
        }
        if (currArticle.quantity === 0) {
            return `The ${articleName} is not available.`;
        }else{
            let currGuest = this.guests.find(g => g.guestName === guestName);
            if (!currGuest) {
                return "This guest is not invited."
            }else{
                let price = this.possibleArticles[articleModel];
               if (currGuest.points < price) {
                return "You need to more points to purchase the article.";
               }else{
                currGuest.points -= price;
                currArticle.quantity--;
                currGuest.purchaseArticle++;
                return `${guestName} successfully purchased the article worth ${price} points.`;
               }
            }
        }
       
    }
    showGalleryInfo (criteria){
        let result = [];
        if (criteria === 'article') {
            result.push("Articles information:");
            this.listOfArticles.forEach(a => result.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`));
        }else if(criteria === 'guest'){
            result.push("Guests information:");
            this.guests.forEach(g => result.push(`${g.guestName} - ${g.purchaseArticle}`));
        }
        return result.join('\n');
    }
}
const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));

