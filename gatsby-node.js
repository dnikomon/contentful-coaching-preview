/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

// pages locale
exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions
    deletePage(page)
    // You can access the variable "locale" in your page queries now
    createPage({
        ...page,
        context: {
            ...page.context,
            locale: page.context.intl.language,
        },
    })
}
