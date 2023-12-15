function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/blog/';

    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const btnViewPost = document.getElementById('btnViewPost');
    const selectorPosts= document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    let postCollection = {};

    btnLoadPosts.addEventListener('click', async () => {
        await collectPosts();
    });
    
    async function collectPosts() {
       selectorPosts.innerHTML='';

       const response = await fetch(baseURL+'posts');
       postCollection = await response.json();

      for (const[postID,postObject] of Object.entries(postCollection)) {
      
        const option = document.createElement('option');
        option.value = postID;
        option.textContent = postObject.title;
        selectorPosts.appendChild(option); 
      }
    }

    btnViewPost.addEventListener('click', async () => {
        await showPost();
    }); 

    async function showPost(){
        postBody.textContent = '';
    postComments.textContent = '';
    postTitle.textContent = '';

    const postID = selectorPosts.value;
    const selectedPost = postCollection[postID];

    if (selectedPost) {
        postTitle.textContent = selectedPost.title;
        postBody.textContent = selectedPost.body;

        const response = await fetch(baseURL + 'comments');
        const commentsInfo = await response.json();

        const filterComments = Object.values(commentsInfo).filter(comment => comment.postId === postID);

        postComments.innerHTML = '';  // Clear previous comments
        for (const comment of filterComments) {
            const li = document.createElement('li');
            li.id = comment.id;
            li.textContent = comment.text;
            postComments.appendChild(li);
        }
    }
    }


}

attachEvents();