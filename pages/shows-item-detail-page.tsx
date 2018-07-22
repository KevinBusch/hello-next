import MyLayout       from '@components/my-layout';
import fetch          from 'isomorphic-unfetch';
import React          from 'react';
import { CoreUtils }  from '@core/core-utils';
import { TvMazeShow } from '@core/interfaces/tv-maze/tv-maze-show';


/*
-------------------------------------------------------------------------------
Interfaces
-------------------------------------------------------------------------------
*/

interface ShowsItemDetailPageState {
  isLoading:            boolean;
  show:                 TvMazeShow;
  wasInitialDataLoaded: boolean; // necessary because getInitialProps is called again if clicking on link which redirects to same route and same component
}
interface ShowsItemDetailPageProps {
  id:             string;
  shouldLoadData: boolean;
  show:           TvMazeShow;
 }

export default class ShowsItemDetailPage extends React.PureComponent<ShowsItemDetailPageProps, ShowsItemDetailPageState> {

  /*
  -------------------------------------------------------------------------------
  Constructor
  -------------------------------------------------------------------------------
  */

  constructor(props: ShowsItemDetailPageProps) {
    super(props);

    // default to whatever is coming through props
    this.state = {
      isLoading:            CoreUtils.isNullOrUndefined(this.props.show),
      show:                 this.props.show,
      wasInitialDataLoaded: !this.props.shouldLoadData,
    };

    CoreUtils.bindAll(this);
  }


  /*
  -------------------------------------------------------------------------------
  Public Methods
  -------------------------------------------------------------------------------
  */

  public componentDidUpdate(prevProps: ShowsItemDetailPageProps) {
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
        { // if
          this.state.isLoading ?
            <div>Loading...</div>
          : 
          // else
            <div>
              <h1>{this.state.show.name}</h1>
              <p>{this.state.show.summary.replace(/<[/]?p>/g, '')}</p>
              <img src={this.state.show.image.medium}/>
              <button onClick={this._onTestAJAXClick}>Test AJAX</button>
            </div>
        }
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
      isLoading: true,
      show:      null,
    });

    const res = await fetch(`https://api.tvmaze.com/shows/${this.props.id}`);
    const show = await res.json();
    setTimeout(() => {
      this.setState({
        isLoading: false,
        show:      show,
      });
    }, 750);
  }
}

// ShowsItemDetailPage.getInitialProps = async function (context): Promise<ShowsItemDetailPageProps> {
//   const { id } = context.query
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
//   const show = await res.json()

//   console.log(`Fetched show: ${show.name}`)

//   return { show }
// }

/*
-------------------------------------------------------------------------------
Server Side Rendering
-------------------------------------------------------------------------------
*/
 
ShowsItemDetailPage.getInitialProps = async function(context): Promise<ShowsItemDetailPageProps> {
  
  let show           = null;
  let shouldLoadData = true;
  const { id }       = context.query;

  if (context.req != undefined) {

    // request is being made server side, do not load data after render
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    show = await res.json()
    shouldLoadData = false;
  }

  return {
    id:             id,
    shouldLoadData: shouldLoadData,
    show:           show,
  };
}