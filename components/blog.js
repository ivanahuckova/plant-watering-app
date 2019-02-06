class Blog {
	constructor(blog) {
		this.blog = blog;
		this.button = blog.querySelector(".expand-button");
		this.button.addEventListener("click", () => {
			this.expandBlog();
		});
	}
	expandBlog() {
		this.blog.classList.toggle("blog-open");
	}
}
const blogs = document.querySelectorAll(".blog-post");
blogs.forEach(b => {
	new Blog(b);
});
