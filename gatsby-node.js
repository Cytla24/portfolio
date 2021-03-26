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

  const result_proj = await graphql(`
    {
      news: allStrapiProjects {
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

  createPage({
    path: `/projects/${result_proj.data.news.nodes[0].slug}`,
    component: path.resolve(`src/templates/how-to-template.js`),
    context: {
      slug: result_proj.data.news.nodes[0].slug,
    },
  })
  createPage({
    path: `/projects/${result_proj.data.news.nodes[1].slug}`,
    component: path.resolve(`src/templates/review-template.js`),
    context: {
      slug: result_proj.data.news.nodes[1].slug,
    },
  })
  // result_proj.data.news.nodes.forEach(eachproj => {
  //   createPage({
  //     path: `/projects/${eachproj.slug}`,
  //     component: path.resolve(`src/templates/review-template.js`),
  //     context: {
  //       slug: eachproj.slug,
  //     },
  //   })
  // })
}
