import React, { Component, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import PropTypes from "prop-types";
import { addProduct } from "../../redux/actions/productsActions";

function AddProductForm() {
  const dispatch = useDispatch();
  //const products= useSelector((state) => state.products.products);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("0.00");
  const [description, setDescription] = useState("");
  const [img, setImage] = useState();

  const onSubmit = (e) => {
   
    e.preventDefault();
    const uploadData = new FormData();
    uploadData.append('img', img, img.name);
    uploadData.append('seller', 1);
    uploadData.append('m_category', 1);
    uploadData.append('name',name);
    uploadData.append('price', price);
    uploadData.append('description', description);
    uploadData.append('s_categories', ["2"]);
    uploadData.append('addresses', [1]);
  
    /*const newProduct = {
      seller: 1,
      m_category: 1,
      name,
      price,
      description,
      s_categories: ["2"],
      addresses: [1],
      
    };*/

    dispatch(addProduct(uploadData));
  };

  return (
    <div className="card card-body mt-4 mb-4">
      <h2>Add Lead</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            className="form-control"
            type="text"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            onChange={(evt) => setImage(evt.target.files[0])}
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProductForm;

/*export class AddProductForm extends Component {
    state = {
        name: '',
        price: '',
        description: '',
      };
    
      static propTypes = {
        addProduct: PropTypes.func.isRequired,
      };
    
      onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
      onSubmit = (e) => {
        e.preventDefault();
        const { name, price, description } = this.state;
        const product = { seller:1,m_category:1, name, price, description, s_categories:["2",], addresses:[1,] };
        this.props.addProduct(product);
        this.setState({
          name: '',
          price: '',
          description: '',
        });
      };
    
      render() {
        const { name, price, description } = this.state;
        return (
          <div className="card card-body mt-4 mb-4">
            <h2>Add Lead</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={this.onChange}
                  value={name}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  className="form-control"
                  type="text"
                  name="price"
                  onChange={this.onChange}
                  value={price}
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  className="form-control"
                  type="text"
                  name="description"
                  onChange={this.onChange}
                  value={description}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        );
      }
    }
    
    export default connect(null, { addProduct })(AddProductForm);*/
