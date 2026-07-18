// Step 1: Create function to house fetch and apply async to function
async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    

    if(!response.ok) {
        throw new Error("Failed to fetch posts");
    }
    const posts = await response.json();
    

    displayPosts(posts);
}

// Step 5: Create Function to Display Posts called displayPosts()
// Step 6: Pass in the array of posts
    const postList = document.getElementById('post-list');
    function displayPosts(posts) {
        
    
    // Step 7: Loop through the posts list
    posts.forEach(post => {
        // Step 8: Within the loop - Create a li tag
        const li = document.createElement('li');
        
        // Step 9: Create a new h1 tag
        const h1 = document.createElement('h1');
        // Step 10: Add the title as the textContent
        h1.textContent = post.title;
        
        // Step 11: Create a new p tag
        const p = document.createElement('p');
        // Step 12: Add the body as the textContent
        p.textContent = post.body;
        
        // Step 13: Append h1 and p to li
        li.appendChild(h1);
        li.appendChild(p);
        
        // Step 14: Append li to the ul (id is post-list)
        postList.appendChild(li);

        console.log(document.body.innerHTML);
    
    });
    }

// Execute the async function
fetchPosts();
