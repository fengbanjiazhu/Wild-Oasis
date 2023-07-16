import React, { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal(!isOpenModal)}> Add new cabin</Button>
      {isOpenModal && (
        <Modal
          onCloseModal={() => {
            setIsOpenModal(false);
          }}
        >
          <CreateCabinForm
            onCloseModal={() => {
              setIsOpenModal(false);
            }}
          ></CreateCabinForm>
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
