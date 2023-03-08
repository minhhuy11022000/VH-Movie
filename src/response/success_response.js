import React, { useEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Preview, print } from "react-html2pdf";
import emailjs from "@emailjs/browser";

export const Successresponse = () => {
  const history = useHistory();
  const location = useLocation();
  const form = useRef();
  var profile = location.state.profile;
  var email = location.state.email;
  var password = location.state.password;
  var mobile = location.state.mobile;
  var bookingdate = location.state.bookingdate;
  var username = location.state.username;
  var totalceats = location.state.totalceats;
  var ceatnames = location.state.ceatnames;
  var name = location.state.name;
  var moviename = location.state.moviename;
  var ticketcost = location.state.ticketcost;

  const downloadTicket = () => {
    print("VH-CINEMAS", "booking-pdf");
  };
  const returnHome = () => {
    history.push({
      pathname: "/homepage",
      state: {
        profile: profile,
        name: username,
        email: email,
        password: password,
        mobile: mobile,
      },
    });
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_92wc8oc",
        "template_gg6vxzs",
        form.current,
        "5X9PQPa3ntVGHd-pc"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    // $(".booking-pdf").hide();
    sendEmail();
  }, []);

  return (
    <div>
      <br />
      <div className="booking-pdf">
        {/* <Preview id={"booking-pdf"}>
          <h1 style={{ marginLeft: "30%" }}>VH CINEMAS</h1>
          <p style={{ marginLeft: "30%" }}>Booking Date : {bookingdate}</p>
          <p style={{ marginLeft: "30%" }}>Ticket Booked By : {username}</p>
          <p style={{ marginLeft: "30%" }}>Total Ceat : {totalceats}</p>
          <p style={{ marginLeft: "30%" }}>Ceat Number : {ceatnames}</p>
          <p style={{ marginLeft: "30%" }}>Watchers : {name}</p>
          <p style={{ marginLeft: "30%" }}>Movie Name : {moviename}</p>
          <p style={{ marginLeft: "30%" }}>
            Total Cost : {ticketcost * totalceats}
          </p>
        </Preview> */}
        <form ref={form} onSubmit={sendEmail}>
          <h1 style={{ marginLeft: "30%" }}>VH CINEMAS</h1>
          <div>
            Booking Date:
            <input
              name="booking_date"
              type="text"
              style={{ marginLeft: "30%" }}
              value={bookingdate}
            />
          </div>
          <div>
            Movie Name :
            <input
              name="movie_name"
              type="text"
              style={{ marginLeft: "30%" }}
              value={moviename}
            />
          </div>
          <div>
            Total seats:
            <input
              name="total_seats"
              type="text"
              style={{ marginLeft: "30%" }}
              value={totalceats}
            />
          </div>
          <div>
            Seat Number:
            <input
              name="seat_number"
              type="text"
              style={{ marginLeft: "30%" }}
              value={ceatnames}
            />
          </div>
          <div>
            Ticket Booked By :
            <input
              name="user_email"
              type="text"
              style={{ marginLeft: "30%" }}
              value={email}
            />
          </div>
          {/* <p style={{ marginLeft: "30%" }}>Ticket Booked By : {username}</p>
          <p style={{ marginLeft: "30%" }}>Total Ceat : {totalceats}</p>
          <p style={{ marginLeft: "30%" }}>Ceat Number : {ceatnames}</p>
          <p style={{ marginLeft: "30%" }}>Watchers : {name}</p>
          <p style={{ marginLeft: "30%" }}>Movie Name : {moviename}</p> */}
        </form>
      </div>
      <form></form>
      <br />
      <button style={{ marginLeft: "27%" }} onClick={downloadTicket}>
        Download Ticket
      </button>
      <br />
      <br />
      <button style={{ marginLeft: "27%" }} onClick={returnHome}>
        Return To Home
      </button>
    </div>
  );
};
