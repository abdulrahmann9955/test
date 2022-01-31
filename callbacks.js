const posts = [
    { title: 'post One', body: 'this is post One' },
    { title: 'post Two', body: 'this is post Two' },
]

const getPost = () => {
    setTimeout(() => {
        let outPut = ''
        posts.forEach((post) => {
            outPut += `<li>${post.title}</li>`
        })
        document.body.innerHTML = outPut
    }, 1000)
}

const createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 2000)
}

getPost()
createPost({ title: 'Post three', body: 'this is Post three' }, getPost)
