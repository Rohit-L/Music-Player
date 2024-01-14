import uploadSong from "@/app/actions/uploadSong";

const Page = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full max-w-sm">
        <form action={uploadSong}>
          <label className="form-control w-full" htmlFor="title">
            <div className="label">
              <span className="label-text">Title</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full"
              id="title"
              name="title"
              required
            />
          </label>

          <label className="form-control w-full" htmlFor="artist">
            <div className="label">
              <span className="label-text">Artist</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full"
              id="artist"
              name="artist"
              required
            />
          </label>

          <input
            type="submit"
            className="btn btn-primary mt-4"
            value="Upload"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Page;
