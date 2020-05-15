import React, { Component } from "react";
import Tour from "../Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData,
    name: "Alok",
    Age: "27",
  };

  removeTour = (id) => {
    const { tours } = this.state;
    const sortedTours = tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: sortedTours,
    });
  };
  render() {
    //console.log(this.state);
    // const mystate = this.state;
    // console.log(mystate);

    //MAP FUNCTION CREATES A NEW ARRAY AFTER MAPPING OVER INDIVIDUAL VALUES IN THE ARRAY
    // const mytoursnames = this.state.tours.map((orange) => orange.name);
    // console.log(mytoursnames);

    //BELOW WE CAN TAKE DIFFERENT FROM THE ONE MENTIONED IN THE STATES
    const mytours = this.state.tours;
    //console.log(mytours);

    //BELOW WE NEED TO TAKE THE SAME VARIABLE AS IN THE STATE
    const { tours } = this.state;
    //const { Age } = this.state;
    // console.log(Age);
    // console.log(tours);

    //HOWEVER WE WILL NEED TO USE ONE OF THE WAYS AS THE STATE CANNOT BE DIRECTLY USED IN THE RENDER METHOD
    return (
      <section className="tourlist">
        {mytours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}
