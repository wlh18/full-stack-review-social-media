module.exports = {
  getPosts: async (req, res) => {
    //#user id
    const { id } = req.params;
    const db = req.app.get("db");
    await db
      .get_posts(id)
      .then(posts => {
        res.status(200).send(posts);
      })
      .catch(err => res.status(500).send(err));
  },
  addPost: async (req, res) => {
    //#user id
    const { id } = req.params;
    const { post } = req.body;
    const db = req.app.get("db");
    const posts = await db.add_post(id, post);
    if (posts[0]) {
      res.status(201).send(posts);
    } else {
      res.sendStatus(500);
    }
  },
  editPost: (req, res) => {
    //#post id
    const { id } = req.params;
    const db = req.app.get("db");
    db.edit_post(id).then(posts => {
      res
        .status(200)
        .send(posts)
        .catch(err => res.status(500).send(err));
    });
  },
  deletePost: (req, res) => {
    //#post id
    const { id } = req.params;
    const db = req.app.get("db");
    db.delete_post(id).then(posts => {
      res
        .status(200)
        .send(posts)
        .catch(err => res.status(500).send(err));
    });
  }
};
