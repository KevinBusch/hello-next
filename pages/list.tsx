import MyLayout from "@components/my-layout";
import Link     from "next/link";
import fetch    from "isomorphic-unfetch";
import React    from 'react';
import { CoreUtils } from "@core/core-utils";


// const PostLink = (props) => (
//     <li>
//       <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
//         <a>{props.title}</a>
//       </Link>
//     </li>
//   );

interface MoviesListState {
  isLoading:            boolean;
  shows:                any;
  wasInitialDataLoaded: boolean; // necessary because getInitialProps is called again if clicking on link which redirects to same route and same component
}
interface MoviesListProps {
  shouldLoadData: boolean;
  shows:          any;
 }

export default class MoviesList extends React.Component<MoviesListProps, MoviesListState> {

  constructor(props: MoviesListProps) {
    super(props);

    // default to whatever is coming through props
    this.state = {
      isLoading:            false,
      shows:                this.props.shows,
      wasInitialDataLoaded: !this.props.shouldLoadData,
    };

    console.log('constructor');

    CoreUtils.bindAll(this);
  }

  public componentDidUpdate(prevProps: MoviesListProps) {
    console.log('componentDidUpdate');
    if (!this.state.wasInitialDataLoaded && prevProps.shouldLoadData != this.props.shouldLoadData && !this.props.shouldLoadData) {
      this._loadData();
    }
  }

  public componentDidMount() {
    console.log('componentDidMount');
    if (this.props.shouldLoadData) {
      this._loadData();
    }
  }

  public render() {
    console.log('render');
    return (
      <MyLayout>
        { // if
          this.state.isLoading &&
          <div>Loading...</div>
        }
        <h1>Batchman TV Shows</h1>
        <ul>
            {this.state.shows.map(({show}) => (
                <li key={show.id}>
                <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                    <a>{show.name}</a>
                </Link>
                </li>
            ))}
        </ul>
        <button onClick={this._onTestAJAXClick}>Test AJAX</button>
        <style jsx>{`
        h1, a {
            font-family: "Arial";
        }

        ul {
            padding: 0;
        }

        li {
            list-style: none;
            margin: 5px 0;
        }

        a {
            text-decoration: none;
            color: blue;
        }

        a:hover {
            opacity: 0.6;
        }
        `}</style>
      </MyLayout>
    );
  }

  private _onTestAJAXClick() {
    this._loadData();
  }

  private async _loadData() {
    this.setState({
      isLoading: true,
      shows:     [],
    });

    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    setTimeout(() => {
      this.setState({
        isLoading: false,
        shows:     data,
      });
    }, 750);
  }
}

MoviesList.getInitialProps = async function({ req }): Promise<MoviesListProps> {
  
  let data = [];
  let shouldLoadData = true;

  if (req != undefined) {

    // request is being made server side, do not load data after render
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    data = await res.json()
    shouldLoadData = false;
  }

  return {
    shouldLoadData: shouldLoadData,
    shows:          data,
  };
}