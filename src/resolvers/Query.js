const Query = {
  count(parent, args, { db }, info) {
    return { count: db.count }
  }
}

export { Query as default };