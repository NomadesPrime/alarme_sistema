export function ModalExcluir(props) {
    function exit(){
        document.querySelector(".modalEdit").classList.add("hidden");
        document.querySelector(".modalEdit").classList.remove("flex");
    }
  return (
    <div className="modalEdit fixed w-full h-full top-0 left-0 flex items-center justify-center hidden">
        <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
        <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
                <div className="flex justify-between items-center pb-3">
                    <p className="text-2xl font-bold">Delete alarm</p>
                    <div className="modal-close cursor-pointer z-50">
                        <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" onClick={exit}>
                            <path d="M1 1l16 16m0-16L1 17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </div>
                </div>
                <div className="my-5">
                    <p className="text-gray-700 text-base font-bold mb-2">Are you sure you want to delete this alarm?</p>
                    <div className="flex justify-end pt-2">
                        <button className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2" onClick={exit}>Cancel</button>
                        <button className="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400" onClick={props.deleteAlarm}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
