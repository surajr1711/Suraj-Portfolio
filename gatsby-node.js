const path = require('path')

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
	const result = await graphql(`
		{
			blogs: allStrapiBlogs {
				nodes {
					slug
				}
			}
			projects: allStrapiProjects {
				nodes {
					slug
				}
			}
		}
	`)

	result.data.blogs.nodes.forEach(blog => {
		actions.createPage({
			path: `/blog/${blog.slug}`,
			component: path.resolve(`src/templates/blog-template.js`),
			context: {
				slug: blog.slug
			}
		})
	})

	result.data.projects.nodes.forEach(project => {
		actions.createPage({
			path: `/projects/${project.slug}`,
			component: path.resolve(`src/templates/project-template.js`),
			context: {
				slug: project.slug
			}
		})
	})
}