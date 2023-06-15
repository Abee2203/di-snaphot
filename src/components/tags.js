import React from 'react';
import './tags.css'
class Tags extends React.Component{
    render(){
        return (
        <div className='tags'>
            {
            this.props.items.map((item) => ((<button>{item.name}</button>)))
            }
            </div>
             )

}
}
export default Tags