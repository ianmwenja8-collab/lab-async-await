// Step 1: Create function to house fetch and apply async to function
async function fetchPosts() {
    try {
        // Step 2: Apply await to fetch
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Step 3: Apply await to get JSON data
        const posts = await response.json();
        
        // Step 4: Call displayPosts() function after fetch
        displayPosts(posts);
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Step 5: Create Function to Display Posts called displayPosts()
// Step 6: Pass in the array of posts
function displayPosts(posts) {
    const postList = document.getElementById('post-list');
    
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
    });
}

// Execute the async function
fetchPosts();
