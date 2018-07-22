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
  shows: any;
}
interface MoviesListProps {
  shows: any;
}

export default class MoviesList extends React.Component<MoviesListProps, MoviesListState> {

  constructor(props: MoviesListProps) {
    super(props);

    this.state = {
      shows: props.shows,
    };

    console.log('constructor');

    CoreUtils.bindAll(this);
  }

  public componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  public render() {
    console.log('render');
    return (
      <MyLayout>
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

  private async _onTestAJAXClick() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=superman');
    const data = await res.json();
    this.setState({
      shows: data,
    })
  }
}

MoviesList.getInitialProps = async function({ req }): Promise<MoviesListProps> {
  
  let data = [];
  if (req != undefined) {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    data = await res.json()
    console.log(`Show data fetched. Count: ${data.length}`)
  }

  return {
      shows: data
  };
}