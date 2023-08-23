import { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useNavigate } from "react-router-dom";

const getLocalData = () => {
  let localData = JSON.parse(localStorage.getItem("formData"));

  if (localData) {
    return JSON.parse(localStorage.getItem("formData"));
  } else {
    return [];
  }
};

const ModalData = ({ id, onClose, open }) => {
  const navigate = useNavigate();

  const [data, setData] = useState(getLocalData());
  //   const [formData, setFormData] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const currentPost = data.find((e) => {
      return e.id == id;
    });
    setTitle(currentPost.title);
    setDescription(currentPost.description);
  }, [id]);

  const onsubmit = (e) => {
    e.preventDefault();
    console.log("hii")
    const updatedPost = [...data];
    const index = updatedPost.findIndex((post) => post.id === id);
    updatedPost[index].title = title;
    updatedPost[index].description = description;
    localStorage.setItem("formData", JSON.stringify(updatedPost));
    setData(updatedPost);
    
    onClose();
    navigate("/");
  };

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <div className="w-full max-w-xs">
          <form
            onSubmit={onsubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ModalData;
