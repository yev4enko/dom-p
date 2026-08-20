export function reverse(arr) {
    let res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        res.push(arr[i]);
    }
    return res;
}

export function textParagr(post) {
    return post.postDescr.map(para => `<p>${para}</p>`)
        .join("");
}

export function parseDescr(string) {
    const res = string.split(/\r?\n/);
    return res;
}

export function parseTags(string) {
    const res = string.split("#")
        .map(tag => `#${tag.trim()}`)
        .filter(tag => tag.length > 1)
    return res
}

export function datE(date) {
    const res = new Date(date);
    return res;
}

export function cut(arr, count) {
    const fullText = arr.join();
    const res = fullText.slice(0, count);
    return `${res}...`
}