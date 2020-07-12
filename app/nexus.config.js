module.exports = {

  // These are configuration values that are not related to connection or modules but 
  //  specific to the nexus core configuration.
  global: {

    // If your app has its own routes, it might be a good idea to give nexus routes 
    //  a prefix so that they don't collide. By default, nexus routes are at the root though.
    //  For example, you might just want to use something like `"/n".  
    nexusPath: "/",

    // The URL that is used to access the nexus application over HTTP.  This should
    //  only be the root (do not include any path)
    baseUrl: "https://localhost:3000",

    // By default, Nexus exposes some API endpoints to get information about the configuration
    //  of the instance.  Things like module configuration (minus secrets), running jobs,
    //  exposed routes, etc.  It is recommended that you create a free account with Authh0 and
    //  setup a tenet 
    authentication: {
      auth0: {
        jwksUri: "https://kshehadeh.us.auth0.com/.well-known/jwks.json",
        audience: "https://nexus-switchboard.dev",
        issuer: "https://kshehadeh.us.auth0.com/",
        algorithms: ["RS256"]
      }
    }
  },
  connections: [
    {
      name: "connection",
      path: ".."
    }
  ],
  modules: {
    module: {
      path:"..",
      config: {}
    },
    "nexus-mod-liveness": {
      scope: "nexus-switchboard",
      config: {}
    }
  }
}
