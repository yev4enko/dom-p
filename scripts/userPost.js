export function userPost(authorName, postTittle, postDescr, postTags, postLikes){
    this.postID = crypto.randomUUID();
    this.authorName = authorName;
    this.postTittle = postTittle;
    this.postDescr = postDescr;
    this.postTags = postTags;
    this.postLikes = postLikes || 0;
    this.createDate = Date.now();

    this.loadToLS = function(){
        const nP = JSON.stringify(this)
        localStorage.setItem(this.postID,nP);
    }
}