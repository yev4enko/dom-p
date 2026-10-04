import { localStorageAPI } from "../api/localStorageAPI.js";

export function newPost(
    slug,
    title,
    imageLink,
    content,
    tags = [],
    category
) {
    this.id = generateNewId();
    this.slug = slug;
    this.url = `./pages/post?postID=${this.id}`;
    this.title = title;
    this.content = content;
    this.image = imageLink;
    this.thumbnail = null;
    this.status = "published";
    this.category = category;
    this.publishedAt = generateNewPublishDate();
    this.updatedAt = this.publishedAt;
    this.userID = "local";
    this.likeCount = 0;
    this.tags = [...tags];
    this.saved = false;
}


const generateNewPublishDate = () => {
    const now = new Date();

    const formatted = now
        .toLocaleString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        })
        .replace(",", "");
    return formatted;
}

const generateNewId = () => {
    const data = localStorageAPI.loadDataArr("users_posts");

    const maxID = data.length
        ? Math.max(...data.map((post) => post.id))
        : 0;

    return maxID + 1;
};

export function newUser(firstname, lastname, email, phone, password) {

    this.id = 100;
    this.registered = true;
    this.logged = false;
    this.registeredAt = new Date;
    this.firstName = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password
    this.birthDate = "today"
    this.phone = phone;
    this.savedPosts = []
}

