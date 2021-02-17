const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      news: allStrapiNews {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.news.nodes.forEach(eachnews => {
    createPage({
      path: `/news/${eachnews.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: eachnews.slug,
      },
    })
  })
}
