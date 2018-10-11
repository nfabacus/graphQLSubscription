# POC graphQL server - listening to Call from Server.
This is a spike to test an idea below:
1. Some server call a graphQL server to notify an event via a simple rest POST call.
2. When the graphQL server detects (receives a POST call), it publishes an event via websocket.
3. Any application listening to the channel will detect the event via subscription.

This works.
Installation:
1. Clone this repo. 
2. npm install
3. In a terminal window, ```npm start``` and open localhost:400 in your browser.  This will open up GraphQL Playground.
4. In the GraphQL Playground, add <br />
    ```
    subscription {
      count
    }
    ```
    then, press the play button.
    Now, it will listen to events in the channel.
4. In another terminal window, run ```node updateCount.js```. This mimics a call from another server.
5. The call will trigger (publish) an event in the graphQL server.
6. The client (the GraphQL Playground) will detect the event.

Note: the server making calls should throttle or aggregate its calls to minimise the number of calls it makes.

