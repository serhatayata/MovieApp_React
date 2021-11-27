import React from 'react'
import serialize from 'form-serialize';

class AddMovie extends React.Component {

    handleFormSubmit = (e) => {
        e.preventDefault();

        const newMovie = serialize(e.target,{hash:true});
        console.log(newMovie);
        this.props.onAddMovie(newMovie);
    }

  render() {

    return (
       <div className="container">
           <form className="mt-5" onSubmit= {this.handleFormSubmit} >
             <input className="form-control  mb-3" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie " disabled/>
             <div className="row">
                <div className="form-group col-md-10">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" className="form-control" name="name" />
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputRating">Rating</label>
                    <input type="text" className="form-control" name="rating"/>
                </div>
             </div>
            <div className="row">
                <div className="form-group col-md-12">
                    <label htmlFor="inputImage">Image URL</label>
                    <input type="text" className="form-control" name="imageURL"/>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-12">
                    <label htmlFor="overviewTextarea">Overview</label>
                    <textarea className="form-control" rows="5" name="overview"></textarea>
                </div>
            </div>
            <input type="submit" className="btn btn-danger btn-block form-control mt-2" value="Add Movie" />
           </form>
       </div>
    )
  }
}

export default AddMovie