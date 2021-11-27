import React from 'react'
import axios from 'axios'

class EditMovie extends React.Component {
    
    state = {
        name:"",
        rating:"",
        overview:"",
        imageURL:""
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
    }

    async componentDidMount(){
       const id = this.props.match.params.id;
       const response = await axios.get(`http://localhost:3002/movies/${id}`);
       const movie=response.data;

       this.setState({
        name:movie.name,
        rating:movie.rating,
        overview:movie.overview,
        imageURL:movie.imageURL
      }); 
    }

  render() {

    return (
       <div className="container">
           <form className="mt-5" onSubmit= {this.handleFormSubmit} >
             <input className="form-control  mb-3" id="disabledInput" type="text" placeholder="Edit The Form To Update The Movie " disabled/>
             <div className="row">
                <div className="form-group col-md-10">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" className="form-control" value={this.state.name} name="name" />
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputRating">Rating</label>
                    <input type="text" className="form-control" value={this.state.rating} name="rating"/>
                </div>
             </div>
            <div className="row">
                <div className="form-group col-md-12">
                    <label htmlFor="inputImage">Image URL</label>
                    <input type="text" className="form-control"  value={this.state.imageURL} name="imageURL"/>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-12">
                    <label htmlFor="overviewTextarea">Overview</label>
                    <textarea className="form-control" rows="5"  value={this.state.overview} name="overview"></textarea>
                </div>
            </div>
            <input type="submit" className="btn btn-danger btn-block form-control mt-2" value="Edit Movie" />
           </form>
       </div>
    )
  }
}

export default EditMovie