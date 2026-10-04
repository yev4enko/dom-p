export const localStorageAPI = (() => {

    const fetchDataByLink = (link) => {
        return fetch(link)
            .then(res => res.json());
    }

    const saveDataToLocalStorageByKey = (data, key) => {
        const dataString = JSON.stringify(data)
        localStorage.setItem(key, dataString)
    }

    const printAllKeys = () => {
        const keys = Object.keys(localStorage);
        console.log(keys)
    }

    const loadDataArr = (key) => {
        const data = JSON.parse(localStorage.getItem(key))
        if (data === null) {
            return false;
        }
        return data;
    }

    //loadsData/PostsWithID
    const getDataById = (key, id) => {
        const data = loadDataArr(key);
        let res = []

        data.forEach(dataPart => {
            if (dataPart.id === id) {
                res = dataPart
            }
        })
        if (res.length === 0) {
            console.log(`data with such id does not exists ${id}`)
            return undefined;
        }
        return res;
    }

    //json object params + Id
    //obj posts/users
    const getDataByPId = (key, id, param) => {
        const data = loadDataArr(key);
        let res = []

        data.forEach(dataPart => {
            if (dataPart[param] === id) {
                res.unshift(dataPart)
            }
        })
        if (res.length === 0) {
            console.log("data with such id does not exists")
        }
        return res;
    }

    //searchEngineXD
    const getDataByParams = (key, [...param], value) => {
        const data = loadDataArr(key)
        let res = []
        data.forEach((dataPart) => {
            let concat = ``;
            for (let i = 0; i < param.length; i++) {
                if (typeof (dataPart[param[i]]) === "string") {
                    concat += `${dataPart[param[i]]}`
                }
                else if (Array.isArray(dataPart[param[i]])) {
                    for (let j = 0; j < dataPart[param[i]].length; j++) {
                        concat += `${dataPart[param[i]][j]}`;
                    }
                }
            }
            //console.log(concat)
            let text1 = concat.toLowerCase()
            let body = text1.replace(/\s/g, "")
            let text2 = value.toLowerCase();
            let userInput = text2.replace(/\s/g, "")
            console.log(body)
            if (body.indexOf(userInput) !== -1) {
                res.push(dataPart)
            }

        })
        return res;
    }

    const deleteDataByID = (key, id) => {
        const data = loadDataArr(key);
        const dataToDelete = getDataById(key, id)
        const res = data.filter(dataPart => dataPart.id != dataToDelete.id);
        saveDataArr(key, res)
    }

    const updatePostByID = (key, id, newPost) => {
        const data = loadDataArr(key)

        let postToUpdate = getDataById(key, id)

        postToUpdate = {
            ...postToUpdate,
            title: newPost.title,
            content: newPost.content,
            tags: [...newPost.tags]
        }
        console.log(postToUpdate)
        const res = data.map(post =>
            post.id === postToUpdate.id ? postToUpdate : post
        )
        saveDataToLocalStorageByKey(res, "users_posts")
    }

    return { getDataByParams, getDataByPId, fetchDataByLink, printAllKeys, loadDataArr, deleteDataByID, updatePostByID, getDataById, saveDataToLocalStorageByKey }
})()
