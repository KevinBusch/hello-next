import MyLayout from "../components/my-layout";
import React from 'react';

export default class About extends React.PureComponent<undefined, undefined> {
  public componentDidMount() {
    console.log("About", "componentDidMount");
  }
  public render() {
    return (
      <MyLayout>
        <p>This is the about page</p>
      </MyLayout>
    );
  }
}