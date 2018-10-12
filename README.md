## react-mobile-store-button

An React component which allows you to create an iOS App Store or Google Play Store Download Button. This button:

* Using vector format, `svg` file , so don't worry about the resolution
* Can specify your App Store button with customized `url`, `width` and `height`
* Specify `"ios"` or `"android"`

## Usage

Example Code:

```js
import MobileStoreButton from 'react-mobile-store-button';

////

export default class MyComponent extends React.Component {
	render() {
		const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';
		return (
			<div>
				<MobileStoreButton
				  store="ios"
				  url={iOSUrl}
				  linkProps={{ title: 'iOS Store Button' }}
				/>
			</div>
		);
	}
}

```

You will get an iOS App Store dwonload button on Web page looks like this:

![https://github.com/rizzomichaelg/react-mobile-store-button/blob/master/img/example.png?raw=true](https://github.com/rizzomichaelg/react-mobile-store-button/blob/master/img/example.png?raw=true)



## Install

install using `npm` or `yarn`

```bash
npm install --save react-mobile-store-button
```

## How to Run the Example

```bash
git clone https://github.com/rizzomichaelg/react-mobile-store-button.git
cd react-mobile-store-button/example
yarn && yarn start
```

## License
MIT

