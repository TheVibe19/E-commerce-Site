import React from "react";
import MenuItem from "../menu-item/menu-item";
import './direc.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state= {
             sections:  [
                {
                  title: 'hats',
                  imageUrl: 'https://static.fibre2fashion.com/Newsresource/images/244/hats_256519.jpg',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://www.standout.co.uk/blog/wp-content/uploads/2018/03/shutterstock_750704461.jpg',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700950747.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://threadcurve.com/wp-content/uploads/2020/06/man-in-a-black-suit-june102020.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
              
        };
    }

    render() {
      return (
        <div className='directory-menu'>
          {this.state.sections.map(({ title, imageUrl, id, size,linkUrl }) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
          ))}
        </div>
      );
    }
  }
  
  export default Directory;