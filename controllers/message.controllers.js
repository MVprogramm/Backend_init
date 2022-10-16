const Message = require("../models/Message")

exports.createMessage = (req, res, next) => {
  const msg = new Message({
    title: req.body.title,
    content: req.body.content,
    date: req.body.date,
    // rubric: req.body.rubricID,
    // author: req.body.userID
  })
  msg
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Message added succesfully",
        post: {
          ...result,
          id: result._id,
        },
      })
    })
    .catch((err) => {
      res.status(500).json({
        message: "Fail to create the message!",
        err,
      })
    })
}

exports.getMessages = (req, res, next) => {
  const pageSize = +req.query.pageSize
  const currPage = +req.query.page
  const messageQuery = Message.find()

  let fetchedMessage;

  if (pageSize && currPage) {
    messageQuery.skip(pageSize * (currPage - 1)).limit(pageSize)
  }
  messageQuery
    .then((doc) => {
      fetchedMessage = doc
      return Message.countDocuments()
    })
    .then((count) => {
      res.status(200).json({
        message: "All Messages fetched successfully",
        posts: fetchedMessage,
        maxPosts: count,
      })
    })
    .catch((error) => {
      res.status(500).json({
        message: "Fetching messages failed!",
        error,
      })
    })
}

exports.getMessageById = (req, res, next) => {
  Message.findById(req.params.id)
    .then((post) => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Message not found!"})
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Fetching message failed",
        error,
      })
    })
}

// exports.getMessagesByAuthor = (req, res, next) => {
//   let fetchedMessage;
//   Message.find({ author: req.params.author })
//     .then((doc) => {
//       fetchedMessage = doc
//       return Message.countDocuments()
//     })
//     .then((count) => {
//       res.status(200).json({
//         message: "All author's messages fetched successfully",
//         posts: fetchedMessage,
//         maxPosts: count,
//       })
//     })
//     .catch((error) => {
//       res.status(500).json({
//         message: "Fetching messages failed!",
//         error,
//       })
//     })
// }

exports.updateMessage = (req, res, next) => {
  const message = new Message({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
    date: req.body.date,
    // rubric: req.body.rubricID,
    // author: req.body.userID
  })
  Message.updateOne({ _id: req.params.id }, message)
    .then((result) => {
      res.status(200).json({ message: "Update is successful!" })
    })
    .catch((error) => {
      res.status(500).json({
        message: "Couldn't update message",
        error,
      })
    })
}

exports.deleteMessage = (req, res, next) => {
  Message.deleteOne({ _id: req.params.id })
    .then((resp) => {
      res.status(200).json({
        message: "Delete is successful!"
      })
    })
    .catch((error) => {
      res.status(500).json({
        message: "Couldn't delete message",
        error,
      })
    })
}