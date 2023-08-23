import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const id = Math.floor(Math.random() * 1000);
    const data = { id, title, description, image };

    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    localStorage.setItem("formData", JSON.stringify([...storedData, data]));

    setTitle("");
    setDescription("");
    setImage("");
    navigate("/");
  };

  const fileHandler = (event) => {
    // const { name, value } = event.target;
    if (event.target.type === "file") {
        const image = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.addEventListener("load", () => {
            setImage(reader.result);
        });
    }
}

  // const uploadImage = async (e) => {
  //   const file = e.target.files[0];
  //   console.log(file);
  //   const base64 = await convertBase64(file);
  //   console.log(base64); 
  //   setImage(base64);
  // };

  // const convertBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);

  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };

  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 space-y-10 py-12 px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Add Your New Post
          </h1>
        </div>

        <form
          onSubmit={onSubmitHandler}
          className="max-w-md w-full mx-auto bg-[#116466] shadow rounded-lg p-7 space-y-6"
        >
          <div className="flex flex-col">
            <label
              className="text-sm font-bold text-black mb-1"
              htmlFor="title"
            >
              Post Title
            </label>
            <input
              className="border rounded-md bg-white px-3 py-2"
              type="text"
              id="title"
              name="title"
              placeholder="Enter Your Post Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label
              className="text-sm font-bold text-black mb-1"
              htmlFor="description"
            >
              Desription
            </label>
            <textarea
              className="border rounded-md bg-white px-3 py-2"
              name="description"
              id="description"
              placeholder="Enter your Post Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label className="block font-bold mb-4" htmlFor="image">
              Image
            </label>
            <input
              id="image"
              name="file"
              type="file"
              onChange={fileHandler}
              // onChange={(e) => uploadImage(e)}
            />
          </div>
          <div>
            <button className="w-full bg-black rounded-xl text-white py-2 hover:scale-110 duration-3 p-2">
              Submit
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default CreatForm;
