exports.createArticle = (req, res, next) => {
  res.json(
    {
      message: "Create Article Success",
      data: {
        id: 1,
        title:"atom",
        body: "a particle make everything in our universe"
      }
    }
  );
  next();
}

exports.allArticle = (req, res, next) => {
  res.json(
    {
      message: "Get All Products Success",
      data: [
        {
          id: 1,
          title:"atom",
          body: "a particle make everything in our universe"
        }
      ]
    }
  );
  next();
}