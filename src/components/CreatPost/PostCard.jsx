import { useState, useEffect, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import ModalData from "./updateModel";

const PostCard = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState([]);
  const [open, setOpen] = useState({ show: false, id: null });

  const data = localStorage.getItem("formData") || [];
  const userData = JSON.parse(localStorage.getItem("loginData"));

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    setFormData(storedData);
  }, [localStorage.getItem("formData")]);

  const onDeleteHandler = (Id) => {
    const filtered = formData.filter((ele) => {
      return ele.id !== Id;
    });
    setFormData(filtered);

    localStorage.setItem("formData", JSON.stringify(filtered));
  };

  const onEditHandler = (Id) => {
    const editItem = formData.filter((e) => e.id !== Id);
    setFormData(editItem);

    // onOpenModal(Id);
  };

  // const modalEdit = () => {
  //   const presentData = {title, description};

  //   const prevData = JSON.parse(localStorage.getItem("formData"))
  //   localStorage.setItem("formData",JSON.stringify([...prevData],presentData));

  // }
  console.log(formData);

  const onOpenModal = (Id) => {
    console.log(Id);
    setOpen({ show: true, id: Id });
  };
  const onCloseModal = () => setOpen({ show: false, id: null });

  return (
    <div>
      {open.show && <ModalData open={open.show}
      id={open.id} onClose={onCloseModal} />}

      
      <div className="h-screen mx-9">
        <section className="md:h-full flex mx-auto text-gray-600 ">
          <div className="container px-5">
            <div className="text-center mb-4">
              <h1 className="text-5xl text-gray-700 font-semibold">
                Created Post
              </h1>
            </div>
            <div className="flex flex-wrap -m-4 overflow-y-auto">
              {formData.map((value) => (
                <Fragment key={value.id}>
                  <div className="p-4 lg:w-1/3">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        className="lg:h-72 md:h-72 w-full object-cover object-center"
                        src={value.image}
                        // src={
                        //   "https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBvc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                        // }
                        alt="post img"
                      />

                      <div className="p-6 hover:bg-[#116466] hover:text-white transition duration-300 ease-in">
                        <h1 className="text-2xl font-bold mb-5">
                          {value.title}
                        </h1>
                        <p className="leading-relaxed mb-3 line-clamp-3">
                          {value.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <div>
                            <Link to={"/" + value.id}>Read More</Link>
                          </div>
                          {userData.role == "admin" && (
                            <div className="flex flex-row justify-between">
                              <button
                                onClick={() => onDeleteHandler(value.id)}
                                className="flex text-white items-center md:mb-2 lg:mb-0 bg-black px-3 py-2 rounded-lg"
                              >
                                Delete
                              </button>
                              <button
                                onClick={() => {
                                  // onEditHandler(value.id);
                                  onOpenModal(value.id);
                                }}
                                className="flex text-white items-center md:mb-2 lg:mb-0 mx-5 bg-black px-3 py-2 rounded-lg"
                              >
                                Update
                              </button>

                              {/* {open.show && <Modal open={open} onClose={onCloseModal} center>
                                {formData.map((v) => (
                                  <Fragment key={v.id}>
                                  {console.log(v.id)}
                                    <div className="w-full max-w-xs">
                                      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                        <div className="mb-4">
                                          <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="title"
                                          >
                                            {v.title}
                                          </label>
                                          <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="title"
                                            type="text"
                                            placeholder="Title"
                                          />
                                        </div>
                                        <div className="mb-6">
                                          <label className="block text-gray-700 text-sm font-bold mb-2">
                                            {v.Description}
                                          </label>
                                          <textarea
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                            id="description"
                                            type="text"
                                            placeholder="description"
                                          />
                                        </div>
                                        <div className="flex items-center">
                                          <button
                                            // onClick={modalEdit()}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            type="button"
                                          >
                                            Update
                                          </button>
                                        </div>
                                      </form>
                                    </div>
                                  </Fragment>
                                ))}
                              </Modal>} */}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default PostCard;
