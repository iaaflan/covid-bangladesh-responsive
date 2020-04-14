import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol } from 'mdbreact';
import axios from 'axios'
const centerText = {
  textAlign: 'center'
}




export default class TableSection extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    }
  }
  componentDidMount() {
    axios.get('https://corona-bd.herokuapp.com/district')
      .then(response => {
        //console.log(response.data.data);
        this.setState({ data: response.data.data })
      })
      .catch(error => {
        console.log(error)
      })
  }
  getDataByArray(arrCity) {
    let total = 0;
    const myList = this.state.data;
    let arrData = [];
    const filterdIndex = Object.keys(myList).filter(function (key, index) {
      const item = myList[key];
      return arrCity.find(city => city === item.name)
    });
    const filterdData = filterdIndex.forEach(function (key) {
      arrData.push(myList[key]);
    });
    arrData.forEach(function (element) {
      total = total + element.count;
      //console.log("getDataByArray ", element.name)
    });
    return total;
  }
  render() {
    return (
      <div>
        <MDBRow className="mb-4">
          <MDBCol md="4">
            <MDBCard>
              <MDBCardBody>
                <h4 style={centerText}>Dhaka Division</h4>
                <MDBTable hover>
                  <MDBTableHead color="blue-grey lighten-4">
                    <tr>
                      <th>#</th>
                      <th>District Name</th>
                      <th>Covid-19 Positive</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr>
                      <td>1</td>
                      <td>Dhaka</td>
                      <td>{this.getDataByArray(["Dhaka City"])}</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Faridpur</td>
                      <td>{this.getDataByArray(["Faridpur"])}</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Gazipur</td>
                      <td>{this.getDataByArray(["Gazipur"])}</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Gopalganj</td>
                      <td>{this.getDataByArray(["Gopalganj"])}</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Kishoreganj</td>
                      <td>{this.getDataByArray(["Kishoreganj"])}</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Madaripur</td>
                      <td>{this.getDataByArray(["Madaripur"])}</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Manikganj</td>
                      <td>{this.getDataByArray(["Manikganj"])}</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Munshigonj</td>
                      <td>{this.getDataByArray(["Munshigonj"])}</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Narayanganj</td>
                      <td>{this.getDataByArray(["Narayanganj"])}</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Narshingdi</td>
                      <td>{this.getDataByArray(["Narshingdi"])}</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>Rajbari</td>
                      <td>{this.getDataByArray(["Rajbari"])}</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>Shariatpur</td>
                      <td>{this.getDataByArray(["Shariatpur"])}</td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>Tangail</td>
                      <td>{this.getDataByArray(["Tangail"])}</td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>Dhaka (District)</td>
                      <td>{this.getDataByArray(["Dhaka (District)"])}</td>
                    </tr>

                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <MDBCardBody>
                <h4 style={centerText}>Chittagong Division</h4>
                <MDBTable hover>
                  <MDBTableHead color="blue lighten-5">
                    <tr>
                      <th>#</th>
                      <th>District Name</th>
                      <th>Covid-19 Positive</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr>
                      <td>1</td>
                      <td>Bandarban</td>
                      <td>{this.getDataByArray(["Bandarban"])}</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Brahmanbaria</td>
                      <td>{this.getDataByArray(["B. Baria"])}</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Chandpur</td>
                      <td>{this.getDataByArray(["Chandpur"])}</td>

                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Chattogram</td>
                      <td>{this.getDataByArray(["Chattogram"])}</td>

                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Cumilla</td>
                      <td>{this.getDataByArray(["Cumilla"])}</td>

                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Cox's Bazar</td>
                      <td>{this.getDataByArray(["Cox’s bazar"])}</td>

                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Feni</td>
                      <td>{this.getDataByArray(["Feni"])}</td>

                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Khagrachhari</td>
                      <td>{this.getDataByArray(["Cox’s bazar"])}</td>

                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Laksmipur</td>
                      <td>{this.getDataByArray(["Laksmipur"])}</td>

                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Noakhali</td>
                      <td>{this.getDataByArray(["Noakhali"])}</td>

                    </tr>
                    <tr>
                      <td>11</td>
                      <td>Rangamati</td>
                      <td>{this.getDataByArray(["Rangamati"])}</td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <MDBCardBody>
                <h4 style={centerText}>Khulna Division</h4>
                <MDBTable hover>
                  <MDBTableHead color="blue lighten-5">
                    <tr>
                      <th>#</th>
                      <th>District Name</th>
                      <th>Covid-19 Positive</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr>
                      <td>1</td>
                      <td>Bagerhat</td>
                      <td>{this.getDataByArray(["Bagerhat"])}</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Chuadanga</td>
                      <td>{this.getDataByArray(["Chuadanga"])}</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Jashore</td>
                      <td>{this.getDataByArray(["Jashore"])}</td>

                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Jhenaidah</td>
                      <td>{this.getDataByArray(["Jhenaidah"])}</td>

                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Khulna</td>
                      <td>{this.getDataByArray(["Khulna"])}</td>

                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Kushtia</td>
                      <td>{this.getDataByArray(["Kushtia"])}</td>

                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Magura</td>
                      <td>{this.getDataByArray(["Magura"])}</td>

                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Meherpur</td>
                      <td>{this.getDataByArray(["Meherpur"])}</td>

                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Narail</td>
                      <td>{this.getDataByArray(["Narail"])}</td>

                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Satkhira</td>
                      <td>{this.getDataByArray(["Satkhira"])}</td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="mb-4">
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <h4 style={centerText}>Rajshahi Division</h4>
                <MDBTable hover>
                  <MDBTableHead color="blue-grey lighten-4">
                    <tr>
                      <th>#</th>
                      <th>District Name</th>
                      <th>Covid-19 Positive</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr>
                      <td>1</td>
                      <td>Bogura</td>
                      <td>{this.getDataByArray(["Bogura"])}</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jaipurhat</td>
                      <td>{this.getDataByArray(["Jaipurhat"])}</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Naogaon</td>
                      <td>{this.getDataByArray(["Naogaon"])}</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Natore</td>
                      <td>{this.getDataByArray(["Natore"])}</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Chapai Nawabganj</td>
                      <td>{this.getDataByArray(["Chapainawabganj"])}</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Pabna</td>
                      <td>{this.getDataByArray(["Pabna"])}</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Rajshahi</td>
                      <td>{this.getDataByArray(["Rajshahi"])}</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Sirajganj</td>
                      <td>{this.getDataByArray(["Sirajganj"])}</td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" className="mb-4">
            <MDBCard>
              <MDBCardBody>
                <h4 style={centerText}>Rangpur Division</h4>
                <MDBTable hover>
                  <MDBTableHead color="blue lighten-5">
                    <tr>
                      <th>#</th>
                      <th>District Name</th>
                      <th>Covid-19 Positive</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr>
                      <td>1</td>
                      <td>Dinajpur</td>
                      <td>{this.getDataByArray(["Dinajpur"])}</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Gaibandha</td>
                      <td>{this.getDataByArray(["Gaibandha"])}</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Kurigram</td>
                      <td>{this.getDataByArray(["Kurigram"])}</td>

                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Lalmonirhat</td>
                      <td>{this.getDataByArray(["Lalmonirhat"])}</td>

                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Nilphamari</td>
                      <td>{this.getDataByArray(["Nilphamari"])}</td>

                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Panchagarh</td>
                      <td>{this.getDataByArray(["Panchagarh"])}</td>

                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Rangpur</td>
                      <td>{this.getDataByArray(["Rangpur"])}</td>

                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Thakurgaon</td>
                      <td>{this.getDataByArray(["Thakurgaon"])}</td>

                    </tr>



                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <MDBCardBody>
                <h4 style={centerText}>Barishal Division</h4>
                <MDBTable hover>
                  <MDBTableHead color="blue lighten-5">
                    <tr>
                      <th>#</th>
                      <th>District Name</th>
                      <th>Covid-19 Positive</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr>
                      <td>1</td>
                      <td>Barguna</td>
                      <td>{this.getDataByArray(["Barguna"])}</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Barishal</td>
                      <td>{this.getDataByArray(["Barishal"])}</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Bhola</td>
                      <td>{this.getDataByArray(["Bhola"])}</td>

                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Jhalokathi</td>
                      <td>{this.getDataByArray(["Jhalokathi"])}</td>

                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Potuakhali</td>
                      <td>{this.getDataByArray(["Potuakhali"])}</td>

                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Pirojpur</td>
                      <td>{this.getDataByArray(["Kushtia"])}</td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard>
              <MDBCardBody>
                <h4 style={centerText}>Sylhet Division</h4>
                <MDBTable hover>
                  <MDBTableHead color="blue-grey lighten-4">
                    <tr>
                      <th>#</th>
                      <th>District Name</th>
                      <th>Covid-19 Positive</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr>
                      <td>1</td>
                      <td>Hobiganj</td>
                      <td>{this.getDataByArray(["Hobiganj"])}</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Moulvi Bazar</td>
                      <td>{this.getDataByArray(["Moulvi Bazar"])}</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sunamganj</td>
                      <td>{this.getDataByArray(["Sunamganj"])}</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Sylhet</td>
                      <td>{this.getDataByArray(["Sylhet"])}</td>
                    </tr>

                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard>
              <MDBCardBody>
                <h4 style={centerText}>Mymensingh Division</h4>
                <MDBTable hover>
                  <MDBTableHead color="blue lighten-5">
                    <tr>
                      <th>#</th>
                      <th>District Name</th>
                      <th>Covid-19 Positive</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr>
                      <td>1</td>
                      <td>Jamalpur</td>
                      <td>{this.getDataByArray(["Jamalpur"])}</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Mymensingh</td>
                      <td>{this.getDataByArray(["Mymensingh"])}</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Netrokona</td>
                      <td>{this.getDataByArray(["Netrokona"])}</td>

                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Sherpur</td>
                      <td>{this.getDataByArray(["Sherpur"])}</td>

                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

        </MDBRow>
      </div>
    )
  }
}


