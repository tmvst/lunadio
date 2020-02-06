module.exports.contentful = {
  articles: ({ node: article }) => {
    const author = article.author.reduce((curr, next, index, array) => {
      if (array.length === 1) {
        return next.name;
      }

      return `${curr + next.name}, `;
    }, ``);

    return {
      ...article,
      author,
      body: article.body.childMdx.body,
      timeToRead: article.body.childMdx.timeToRead
    };
  }
};
