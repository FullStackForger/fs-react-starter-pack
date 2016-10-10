![fs-react-starter-pack](https://cloud.githubusercontent.com/assets/10958238/19007584/a5839d9e-875d-11e6-9629-38f468fca30f.jpg)

# FS-React-Starter-Pack

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

## Social buttons

This package heavily borrows from other libraries and social buttons are no exception. Satellizer for its simplicity
and clear code was initial source of inspiration. It is mature and battle tested. Therefore, there was no need to
reinvent the wheel. I tried to copycat both code and ideas as much as possible adopting it to React.

Here is simplest example of social buttons in use inside of your component `reder()` method.

```
render () {
	return (
		<GooglePlus />
		<Facebook />
	)
}
```

### Inspirational packages

* [joshgeller/react-redux-jwt-auth-example](https://github.com/joshgeller/react-redux-jwt-auth-example)
* [mjrussell/redux-auth-wrapper](https://github.com/mjrussell/redux-auth-wrapper)
* [sahat/satellizer](https://github.com/sahat/satellizer)
* [lynndylanhurley/redux-auth](https://github.com/lynndylanhurley/redux-auth)
* [jedireza/aqua](https://github.com/jedireza/aqua)
* [jedireza/frame](https://github.com/jedireza/frame)
