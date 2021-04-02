class Story{
    constructor (inputTitle, inputCreator){
        this.title = inputTitle;
        this.creator = inputCreator;
    }

    comments = [];
    likes = []; //could be not an array but something else

    get likes(){
        let firstUser = '';     //TODO complete
        if(this.likes.length === 0){
            return `${this.title} has 0 likes`;
        }else if (this.likes.length === 1){
            return `${firstUser} likes this story!`;
        }else{
            let totalLikes = this.likes.length;
            return `${firstUser} and ${totalLikes -1} others like this story!`;
        }
    }

    like(username){
        if (!(this.likes.indexOf(username) === -1)){ //u
            throw new Error('You can\'t like the same story twice!');
        }else if(this.creator === username){
            throw new Error('You can\'t like your own story!');
        }else{
            this.likes.push(username);
            console.log( `${username} liked ${this.title}!`);       //todo change to return

        }
    }

    dislike(username){
        if (this.likes.indexOf(username) === -1){
            throw new Error('You can\'t dislike this story!');
        }else{
            let usersIndex = this.likes.indexOf(username);
            this.likes.splice(usersIndex, 1);
            return `${username} disliked ${this.title}`;
        }
    }

    comment(username, content, id){
        //todo
    }

    toString(sortingType){
        //todo
    }

}
    let art = new Story("My Story", "Anny");
    art.like("John");
    console.log(art.likes);
    art.dislike("John");
    console.log(art.likes);
    art.comment("Sammy", "Some Content");
    console.log(art.comment("Ammy", "New Content"));
    art.comment("Zane", "Reply", 1);
    art.comment("Jessy", "Nice :)");
    console.log(art.comment("SAmmy", "Reply@", 1));
    console.log()
    console.log(art.toString('username'));
    console.log()
    art.like("Zane");
    console.log(art.toString('desc'));












