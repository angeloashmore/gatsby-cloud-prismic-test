exports.linkResolver = (doc) => {
  switch (doc.type) {
    case 'page':
    default: {
      if (doc.uid === '_home') {
        return '/'
      } else {
        return `/${doc.uid}`
      }
    }
  }
}
