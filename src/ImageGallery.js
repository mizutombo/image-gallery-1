import React, { Component, PropTypes } from 'react';

/*ImageSelectorBar.propTypes = {
  onList: PropTypes.func.isRequired,
  onThumbnail: PropTypes.func.isRequired,
  onGallery: PropTypes.func.isRequired
};
function ImageSelectorBar(props) {
  return (
    <div>
      <button onClick={props.onList}>List View</button>
      <button onClick={props.onThumbnail}>Thumbnail View</button>
      <button onClick={props.onGallery}>Gallery View</button>
    </div>
  );
};*/

function ListView(props) {
  return (
    <div>
      <h1>{props.image.title}</h1>
      <h1>{props.image.description}</h1>
      <h1>{props.image.url}</h1>
    </div>
  );
}

function ThumbnailView(props) {
  
}

function ImageSelectorBar(props) {
  return (
    <div>
      <button onclick={() => props.clickHandler('list')}>List View</button>
      <button onclick={() => props.clickHandler('thumbnail')}>Thumbnail View</button>
      <button onclick={() => props.clickHandler('gallery')}>Gallery View</button>
    </div>
  ) 
}

export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'list',
      image: {
        title: 'Cute Bunny',
        description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
        url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
      }
    };

    this.clickHandler = this.clickHandler.bind(this);

  }

  clickHandler(newView) {
    this.setState({
      currentView: newView
    });
  }


  render() {
    let contents;
    if (this.state.currentView === 'thumbnail') {
      contents = <ThumbnailView image={this.state.image} />
    }
    else if (this.state.currentView === 'gallery') {
      contents = <GalleryView image={this.state.image} />
    }
    else {
      contents = <ListView image={this.state.image} />
    }
    return (
      <div>
        <ImageSelectorBar
          clickHandler={this.clickHandler}
        />
        {contents}
      </div>
    );
  }

}
