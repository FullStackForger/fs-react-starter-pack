![fs-react-starter-pack](https://cloud.githubusercontent.com/assets/10958238/19007584/a5839d9e-875d-11e6-9629-38f468fca30f.jpg)

# FS React Starter Pack

> **Work in progress. Contributions are welcomed!**

## Setup

### Client

Install dependendencies
```
npm install
```

To start webpack dev server
```
npm start
```

### Server

Install dependencies
```
cd server
npm install
```

Run with
```
node server
```

## Barebones

### Routing

Routing has been done with [react-router 2.8.0][react-router] and [configuration as object][react-router-conf] passed to `Router` component.

[react-router]: https://github.com/reactjs/react-router/blob/v2.8.0/
[react-router-conf]: https://github.com/reactjs/react-router/blob/v2.8.0/docs/guides/RouteConfiguration.md#configuration-with-plain-routes

### User Authentication

Users are authenticated with JSON Web Tokens.

Starter pack uses `rect-jwt-auth-redux` providing `react-jwt-auth` bindings for Redux. 
User can login with either login and password or it's social account by clicking social login button provided 
by `react-jwt-auth`.

Example of `render()` method rendering panel with social login buttons.
```
render () {
    return (
        <div className="form-group">
            <Facebook clientId="310178806023492" />
            <Google clientId="389760969675-u3h2dgm1v3lqd22u8aloimkgd10i0rvf.apps.googleusercontent.com" />
        </div>
    )
}
```

## Sources

### Inspirational packages

Here is the list of great react packages that inspired me to start this project.

* [joshgeller/react-redux-jwt-auth-example](https://github.com/joshgeller/react-redux-jwt-auth-example)
* [mjrussell/redux-auth-wrapper](https://github.com/mjrussell/redux-auth-wrapper)
* [sahat/satellizer](https://github.com/sahat/satellizer)
* [lynndylanhurley/redux-auth](https://github.com/lynndylanhurley/redux-auth)
* [jedireza/aqua](https://github.com/jedireza/aqua)
* [jedireza/frame](https://github.com/jedireza/frame)

* [mxstbr/react-boilerplate](https://github.com/mxstbr/react-boilerplate)

### List of react starting projects

If you don't like this starter pack or have different requirement for you project you should check out following sites:

* [andrewhfarmer.com/starter-project](http://andrewhfarmer.com/starter-project)
* [habd.as/awesome-react-boilerplates](https://habd.as/awesome-react-boilerplates)