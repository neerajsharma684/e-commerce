export const PRODUCT_CATEGORIES = `categories {
  title
  id
  breadcrumbs {
    id
    label
  }
}`

export const CATEGORIES = `query Categories {
  Categories(limit: 500) {
    docs {
      id
      title
      media{
        alt
        width
        height
        url
      }
    }
  }
}`