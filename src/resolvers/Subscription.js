const Subscription = {
    count: {
        subscribe(parent, args, { pubsub }, info) {
            return pubsub.asyncIterator('count')
        }
    }
}

export { Subscription as default }