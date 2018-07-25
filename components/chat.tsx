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
					<button onClick = {this._onClick}>Do something awesome</button>
					{
						this.state.items.map((item, index) => (
							<div key={index}>{item}</div>
						))
					}
			</div>
		);
	}

	private _onClick() {
		this.setState({ items: [].concat(this.state.items, `Doing something awesome${this.state.items.length}`) });
	}
}
