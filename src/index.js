import React from 'react';
import {render} from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import {injectGlobal} from 'styled-components';

import App from './components/App.js';

render(<App />, document.getElementById(`root`));

registerServiceWorker();

injectGlobal`
	*, *:before, *:after {
		box-sizing: border-box;
	}

	html {
		display: flex;
		min-height: 100%;
	}

	body {
		display: flex;
		flex: 1;
		background: whitesmoke;
		background: linear-gradient(135deg, #888 0%, #fff 48%, #888 100%);
		background-size: cover;
	}

	#root {
		display: flex;
		flex: 1;
	}
`;
