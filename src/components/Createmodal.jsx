

export function Modal(props) {
  function exit() {
    document.querySelector(".modal").classList.remove("opacity-100");
    document.querySelector(".modal").classList.add("opacity-0");
    document.querySelector(".modal").classList.remove("pointer-events-auto");
    document.querySelector(".modal").classList.add("pointer-events-none");
  }
  



  return (
    <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center opacity-0 pointer-events-none">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Create a new alarm</p>
            <div className="modal-close cursor-pointer z-50">
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                onClick={exit}
              >
                <path
                  d="M1 1l16 16m0-16L1 17"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="my-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Hour
            </label>
            <p className="text-gray-700 text-3xl font-bold mb-2">
              {props.hour}
            </p>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="range"
              min="0"
              max="23"
              value={props.hour}
              onChange={props.setHour}
            />
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Minute
            </label>
            <p className="text-gray-700 text-3xl font-bold mb-2">
              {props.minute}
            </p>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="range"
              min="0"
              max="59"
              value={props.minute}
              onChange={props.setMinute}
            />
          </div>
          <div className="flex justify-end pt-2">
            <button
              className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
              onClick={props.create}
            >
              Create
            </button>
            <button
              className="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400"
              onClick={exit}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
