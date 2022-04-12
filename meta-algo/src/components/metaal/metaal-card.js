import React from "react";
import "./metaal.css";
import { Modal, Button, Placeholder } from "rsuite";

export default function MetaalCard() {
  const { Paragraph } = Placeholder;

  const [open, setOpen] = React.useState(false);
  const [overflow, setOverflow] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="card metaal-card">
        <div className="flip-box-front text-center">
          <div className="inner text-white">
            <img
              src="https://cdn.pixabay.com/photo/2021/04/30/16/46/bitcoin-icon-6219383_1280.png"
              className="card-img-top metaal-card-img"
              alt="..."
            />
            <div className="card-body metaal-card-body">
              <p className="display-6">$1000</p>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="flip-box-back text-center">
          <div className="inner text-white">
            <img
              src="https://cdn.pixabay.com/photo/2021/04/30/16/46/bitcoin-icon-6219383_1280.png"
              class="card-img-top metaal-card-img"
              alt="..."
            />
            <div className="card-body">
              <h3 className="flip-box-header">25 din mai</h3>
              <p>Paisa Double</p>
              <button className="btn explore-more-btn">Buy Now</button>
              <button className="btn explore-more-btn ms-1" onClick={handleOpen}>more info</button>
              <Modal overflow={overflow} open={open} onClose={handleClose} className="metaal-modal-card">
                <Modal.Header >
                  <Modal.Title>Details</Modal.Title>
                </Modal.Header>
                <Modal.Body className="metaal-modal-card">
                  <Paragraph rows={20} />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={handleClose} className="btn explore-more-btn">
                    Buy Now!
                  </Button>
                  <Button onClick={handleClose} className="btn explore-more-btn">
                    Cancel
                  </Button>
                </Modal.Footer>
              </Modal>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="">
          <div className="flip-box card-body">
            <div
              className="flip-box-front text-center"
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Custom Domains</h3>
                <p>Munna Jhund mei toh Suar aate hai</p>
                <img
                  src="https://picsum.photos/200/300"
                  class="card-img-top"
                  alt="..."
                ></img>
              </div>
            </div>
            <div
              className="flip-box-back text-center"
            >
              <div className="inner color-white">
                <h3 className="flip-box-header">Custom Domains</h3>
                <p>Sher Akela hee ata hai</p>
                <img
                  src="https://picsum.photos/200/300"
                  class="card-img-top"
                  alt="..."
                ></img>
              </div>
            </div>
          </div>
        </div> */}
    </>
  );
}
