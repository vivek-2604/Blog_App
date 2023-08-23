const ErrorPage = () => {
  let title = "An error occurred!";
  let message = "Something went wrong!";

  return (
    <>
      <h1 className="text-3xl text-center text-red-500">{title}</h1>
      <p className="text-center text-red-500">{message}</p>
    </>
  );
};

export default ErrorPage;
