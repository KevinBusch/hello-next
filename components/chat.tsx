// REFERENCE: component persistence (doesn't unmount/mount) between pages ----- see: https://github.com/zeit/next.js/pull/4129

import * as React    from 'react';
import { CoreUtils } from '@core/core-utils';

interface ChatState {
    items: string[];
}

export default class Chat extends React.PureComponent<any, ChatState> {

	constructor(props: any) {
		super(props);

		this.state = {
			items: [],
		};

		CoreUtils.bindAll(this);

		console.log("chat.tsx", "constructor");
	}

	public render() {
		console.log("chat.tsx", "render");
		return (
			<div>
					<button onClick = {this._onClick}>Chat something</button>
					{
						this.state.items.map((item, index) => (
							<div key={index}>{item}</div>
						))
					}
			</div>
		);
	}

	private _onClick() {
		this.setState({ items: [].concat(this.state.items, `Chating something up for the ${this.state.items.length}th time!`) });
	}
}
