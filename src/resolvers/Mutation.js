const Mutation = {
  updateCount(parent, { count }, { db, pubsub }, info) {
    db.count = count
    pubsub.publish('count', {
      count
    })
    return { count };
  }
}

export { Mutation as default }