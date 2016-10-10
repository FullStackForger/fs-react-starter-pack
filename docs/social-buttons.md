# Social Buttons

```
<Facebook clientId={facebookClientId} label="Login with Facebook" />
```

Default social button will generate `<button>` element.

You can also use default html element or your own component.
```
<Facebook>
	<button clientId={facebookClientId}}>
		Login with Facebook
	</button>
</Facebook>
```