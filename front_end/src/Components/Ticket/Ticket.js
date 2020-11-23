import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { ConfirmationNumber } from "@material-ui/icons";

const Ticket = (props) => {
  const { date, showtime } = props.ticket;
  const { title, image_url } = props.ticket.movie;
  const { row_no, col_no, screen, price } = props.ticket.seat;
  return (
    <Card style={{ margin: "1rem" }}>
      <Row style={{ width: "100%", padding: "1rem" }}>
        <Col xs={4}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Image
              src={`/media/${image_url}`}
              style={{
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                border: "4px solid blue",
              }}
            />
            <div
              style={{ fontSize: "16px", fontWeight: "bold", padding: "5px" }}
            >
              {title.toUpperCase()}
            </div>
          </div>
        </Col>
        <Col xs={8}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  SEAT NO:
                </span>{" "}
                {row_no}
                {col_no}
              </div>
              <div>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  SCREEN:
                </span>{" "}
                {screen}
              </div>
              <div>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  PRICE:
                </span>{" "}
                ${price}
              </div>
              <div>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  DATE:
                </span>{" "}
                {date}
              </div>
              <div>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  SHOWTIME:
                </span>{" "}
                {showtime}
              </div>
            </div>
            <div>
              <ConfirmationNumber style={{ fontSize: 120, opacity: 0.7 }} />
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default Ticket;
