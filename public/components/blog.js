class Blog {
	constructor(blog) {
		this.blog = blog;
		this.button = blog.querySelector(".expand-button");
		this.post = blog.querySelector(".blog-text");
		this.button.addEventListener("click", () => {
			this.expandBlog();
		});
	}
	expandBlog() {
		this.post.classList.toggle("text-display-flex");
	}
}
const blogs = document.querySelectorAll(".blog-post");
blogs.forEach(b => {
	new Blog(b);
});
