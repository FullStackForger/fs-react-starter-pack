import React from 'react'

export default function Layout(props) {
	return (
		<html>
		<head>
			<meta charset="utf-8" />
			<title>Sample App</title>

			{/*<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">*/}
			{/*<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">*/}

			<link rel="stylesheet" href="styles/ionicons.min.css" />
			<link rel="stylesheet" href="styles/bootstrap.min.css" />
			<link rel="stylesheet" href="styles/bootstrap-theme.min.css" />
			<link rel="stylesheet" href="styles/main.css" />
		</head>
		<body>

		<div id="app" dangerouslySetInnerHTML={{ __html: props.children }}></div>
		<script id="state" dangerouslySetInnerHTML={{ __html: props.state }}></script>
		<script src="bundle.js"></script>
		</body>
		</html>
	)
}
// 		<div id="app" dangerouslySetInnerHTML={{ __html: props.children }}></div>
//		<script id="state" dangerouslySetInnerHTML={{ __html: props.state }}></script>