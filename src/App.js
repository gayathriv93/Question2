import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  state = {
    users: [],
    pages: []


  }


  componentDidMount() {
    axios.get('https://reqres.in/api/users?page=2')
      .then((res) => {
        console.log(res)
        // this.state.users=res.data ||[];

        this.setState({ users: res.data.data })

      })

  }
  pageChange(pageno) {
    axios.get(`https://reqres.in/api/users?page=${pageno}`)
      .then((res) => {
        console.log(res)
        // this.state.users=res.data ||[];

        this.setState({ users: res.data.data })

      })
  }
 


  render() {
    return (
      <div>
        <table className="table table-bordered w-50">
          <thead >
            <tr>
              <th className="col ">
                #
              </th>
              <th className="col">
                id
              </th>
              <th className="col">
                firstName
              </th>
              <th className="col">
                lastname
              </th>
              <th className="col">
                email
              </th>

            </tr>

          </thead>
          <tbody>
            {
              this.state.users.map((x, i) => {
                return (
                  <tr key={x._id}>
                    <th scope="row">{i + 1}</th>
                    <td>{x.id}</td>
                    <td>{x.first_name}</td>
                    <td>{x.last_name}</td>
                    <td>{x.email}</td>

                  </tr>
                )
              })
            }

          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul className="pagination m-3  justify-content-end">

            <li className="page-item disabled">

              <Link  className="page-a text-decoration-none  p-1 border border-info"  onClick={this.pageChange(1)} tabindex="-1" >Previous</Link>
            </li>
            <li className="page-item">
              <Link  className="page-a text-decoration-none  p-1 border border-info"  onClick={this.pageChange(2)}>1</Link>
            </li>
            <li className="page-item">
              <Link  className="page-a text-decoration-none  p-1 border border-info"  onClick={this.pageChange(3)} >2</Link>
            </li>
            <li className="page-item">
              <Link  className="page-a text-decoration-none  p-1 border border-info"  onClick={this.pageChange(4)} >3</Link>
            </li>
            <li className="page-item">
              <Link  className="page-a text-decoration-none  p-1 border border-info"  onClick={this.pageChange(5)} >Next</Link>
            </li>
          </ul>
        </nav>
      </div>

    );
  }

}



export default App;
