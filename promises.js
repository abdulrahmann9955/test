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

const createPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            const error = false
            if (!error) {
                resolve()
            } else {
                reject('There is an error buddy')
            }
        }, 2000)
    })
}

getPost()
// createPost({ title: 'Post three', body: 'this is Post three' })
//     .then(getPost)
//     .catch((error) => {
//         console.log(error)
//     })

//Aysnc await
// const init = async () => {
//     await createPost({ title: 'Post three', body: 'this is Post three' })
//     getPost()
// }

// init()

//Aysnc await with fetch
const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
}

fetchData()
