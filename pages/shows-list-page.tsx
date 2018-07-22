import MyLayout               from '@components/my-layout';
// import { Context }            from 'next';
import Link                   from 'next/link';
import fetch                  from 'isomorphic-unfetch';
import React                  from 'react';
import { CoreUtils }          from '@core/core-utils';
import { TvMazeSearchResult } from '@core/interfaces/tv-maze/tv-maze-search-result';


/*
-------------------------------------------------------------------------------
Interfaces
-------------------------------------------------------------------------------
*/

interface ShowsListPageState {
  isLoading:            boolean;
  searchResults:        TvMazeSearchResult[];
  wasInitialDataLoaded: boolean; // necessary because getInitialProps is called again if clicking on link which redirects to same route and same component
}
interface ShowsListPageProps {
  shouldLoadData: boolean;
  searchResults:  TvMazeSearchResult[];
 }

export default class ShowsListPage extends React.PureComponent<ShowsListPageProps, ShowsListPageState> {

  /*
  -------------------------------------------------------------------------------
  Server Side Rendering
  -------------------------------------------------------------------------------
  */
  
  static async getInitialProps ({ req }): Promise<ShowsListPageProps> {
    
    let searchResults  = null;
    let shouldLoadData = true;

    if (req != undefined) {

      // request is being made server side, load data now but not after render
      const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
      searchResults = await res.json()
      shouldLoadData = false;
    }

    return {
      shouldLoadData: shouldLoadData,
      searchResults:  searchResults,
    };
  }

  
  /*
  -------------------------------------------------------------------------------
  Constructor
  -------------------------------------------------------------------------------
  */

  constructor(props: ShowsListPageProps) {
    super(props);

    // default to whatever is coming through props
    this.state = {
      isLoading:            CoreUtils.isNullOrUndefined(this.props.searchResults),
      searchResults:        this.props.searchResults,
      wasInitialDataLoaded: !this.props.shouldLoadData,
    };

    CoreUtils.bindAll(this);
  }


  /*
  -------------------------------------------------------------------------------
  Public Methods
  -------------------------------------------------------------------------------
  */
 
  public componentDidUpdate(prevProps: ShowsListPageProps) {
    if (!this.state.wasInitialDataLoaded && prevProps.shouldLoadData != this.props.shouldLoadData && !this.props.shouldLoadData) {
      // ??
      console.log('componentDidMount.loadData()');
      this._loadData();
    }
  }

  public componentDidMount() {
    if (this.props.shouldLoadData) {
      // if loading this module a second time, make sure the data gets loaded again
      console.log('componentDidMount.loadData()');
      this._loadData();
    }
  }

  public render() {
    return (
      <MyLayout>
        <h1>Batman TV Shows</h1>
        { // if
          this.state.isLoading ?
            <div>Loading...</div>
          : 
          // else
            <div>
              <ul>
                {this.state.searchResults.map(({show}) => (
                  <li key={show.id}>
                    <Link as={`/shows-item-detail-page/${show.id}`} href={`/shows-item-detail-page?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
              <button onClick={this._onTestAJAXClick}>Test AJAX</button>
            </div>
        }
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

  /*
  -------------------------------------------------------------------------------
  Private Methods
  -------------------------------------------------------------------------------
  */
 
  private _onTestAJAXClick() {
    this._loadData();
  }

  private async _loadData() {
    this.setState({
      isLoading:     true,
      searchResults: null,
    });

    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    setTimeout(() => {
      this.setState({
        isLoading:     false,
        searchResults: data,
      });
    }, 750);
  }
}