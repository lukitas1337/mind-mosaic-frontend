function CreateBlogForm() {
  return (
    <div className="p-10 font-monda w-[40%] flex flex-col gap-[2.5rem] text-white bg-[#1e1e1e] justify-between items-center">
      <h2 className="text-lg uppercase">New Blog Post</h2>
      <form className="flex flex-col justify-between items-center gap-7 w-full">
        <div className="inputGroup flex flex-col justify-between items-center gap-3 w-[60%]">
          <label htmlFor="title" className="uppercase text-md">
            Post title
          </label>
          <input
            type="text"
            value=""
            id="title"
            placeholder="Write the post title"
            className="w-full px-2 py-1"
          />
        </div>
        <div className="inputGroup flex flex-col justify-between items-center gap-3 w-[60%]">
          <label htmlFor="author" className="uppercase text-md">
            author
          </label>
          <input
            type="text"
            value=""
            id="author"
            placeholder="Write the author's name"
            className="w-full px-2 py-1"
          />
        </div>
        <div className="inputGroup flex flex-col justify-between items-center gap-3 w-[60%]">
          <label htmlFor="content" className="uppercase text-md">
            author
          </label>
          <textarea
            type="text"
            value=""
            id="content"
            placeholder="What is the post about?"
            className="w-full px-2 py-1 h-[12.5rem]"
          />
        </div>
        <button className="btn rounded-none bg-white uppercase text-[#1e1e1e] w-[60%] my-3 hover:bg-[#1e1e1e] hover:text-white hover:border-2 border-white">
          submit post
        </button>
      </form>
    </div>
  );
}

export default CreateBlogForm;
