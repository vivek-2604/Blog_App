import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ModalData from "./updateModel";

const DetailPage = () => {
  const [form, setForm] = useState({});
  const [open, setOpen] = useState({ show: false, id: null });

  const [items, setItems] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("formData"));
  const LoginData = JSON.parse(localStorage.getItem("loginData"));
  const DeletedData = localStorage.getItem("formData");

  useEffect(() => {
    const data = userData.filter((e) => e.id == params.id);
    setForm(...data);
  }, [params]);

  useEffect(() => {
    const postsData = JSON.parse(localStorage.getItem("formData"));
    setItems(postsData);
  }, [DeletedData]);

  const deletHandler = (Id) => {
    const filterData = items.filter((e) => e.id !== Id);
    setItems(filterData);
    console.log(filterData);
    localStorage.setItem("formData", JSON.stringify(filterData));
    navigate("/");
  };

  const onOpenModal = (Id) => {
    console.log(Id);
    setOpen({ show: true, id: Id });
  };
  const onCloseModal = () => setOpen({ show: false, id: null });

  return (
    <Fragment>
      <div className="w-full pb-10 bg-[#f9f9f9]">
        {open.show && (
          <ModalData open={open.show} id={open.id} onClose={onCloseModal} />
        )}
        <div className="max-w-[1100px] mx-auto">
          <div className="grid p-5 text-black">
            <div className="col-span-3">
              <img
                className="h-80 w-full object-cover"
                src={form.image}
                // src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
              />
              <h1 className="font-bold text-2xl my-1 pt-5">{form.title}</h1>
              <div className="pt-5">{form.description}</div>
              {LoginData.role === "admin" && (
                <div className="flex flex-row justify-around pt-10">
                  <button
                    onClick={() => deletHandler(form.id)}
                    className="bg-[#116466] p-3 text-xl rounded-lg"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      onOpenModal(form.id);
                    }}
                    className="bg-[#116466] p-3 text-xl rounded-lg"
                  >
                    Update
                  </button>
                  {/* <Modal open={open} onClose={onCloseModal} center>
                    <div className="w-full max-w-xs">
                      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="title"
                          >
                            Title
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
                            Description
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
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                          >
                            Update
                          </button>
                        </div>
                      </form>
                    </div>
                  </Modal> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailPage;
