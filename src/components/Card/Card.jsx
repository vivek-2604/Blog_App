import { useEffect, useState, Fragment } from "react";

const Card = () => {
  const [finalData, setFinalData] = useState([]);

  useEffect(() => {
    storeData();
  }, []);

  const storeData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setFinalData(data);
  };

  return (
    <div>
      <div className="h-screen mx-9">
        <section className="md:h-full flex mx-auto text-gray-600">
         
          <div className="container px-5">
            <div className="text-center mb-4">
              <h1 className="text-5xl text-gray-700 font-semibold">
                Explore Post
              </h1>
            </div>
            <div className="flex flex-wrap -m-4 overflow-y-auto">
              {finalData.map((value) => {
                return (
                  <Fragment key={value.id}>
                    <div className="p-4 sm:w-1/2 lg:w-1/3 hover:scale-110 duration-300">
                      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          className="lg:h-72 md:h-48 w-full object-cover object-center"
                          src={
                            "https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBvc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                          }
                          alt="post img"
                        />

                        <div className="p-6 hover:bg-[#116466] hover:text-white transition duration-300 ease-in">
                          <h1 className="text-2xl font-bold mb-5">
                            {value.title}
                          </h1>
                          <p className="leading-relaxed mb-3 line-clamp-3">
                            {value.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Card;
