import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
 constructor () {
     super();

     this.state = {
         sections:  [
            {
              title: 'protèger bundle',
              imageUrl: 'https://www.linkpicture.com/q/340117D9-B1BF-495D-B278-03AB61932F59.jpeg',
              id: 1,
              linkUrl: 'shop/hats'
            },
            {
              title: 'BUGNA STUDIOS OOTD',
              imageUrl: 'https://www.linkpicture.com/q/43DCD1AD-0668-4B8F-A073-3E911EB04A0A.jpeg',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'concious clarity',
              imageUrl: 'https://www.linkpicture.com/q/IMG_5573.jpeg',
              id: 3,
              linkUrl: 'shop/sneakers'
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: 'shop/womens'
            },
            {
              title: 'mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: 'shop/mens'
            }
          ]
     }
 }

 render () {
     return (
        <div className='directory-menu'>
            {
            this.state.sections.map(({title, imageUrl, id, size}) => (
                <MenuItem key={id} title ={title} imageUrl={imageUrl} size={size} />
            ))
            }
            </div>
     )
 }
}

export default Directory;