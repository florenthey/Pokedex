import React, { Component } from 'react';

class Search extends Component{

  

    render(onChangeInput) {
        return(

          <div>
            <form>
              <input onChange={ this.props.onChangeInput } type='text'/>
            </form>
          </div>
        )
    }
}

export default Search;