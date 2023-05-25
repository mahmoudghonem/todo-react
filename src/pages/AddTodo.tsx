import { useRef } from "react";

function AddTodo() {
    const titleRef = useRef(null) as any;

    function onSubmitHandler(e:any) {
        e.preventDefault();
        const title = titleRef.current.value;            

    }
  return (
    <div className="p-3">
      <form>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Todo Title
          </label>
          <input
            type="text"
            id="title"
            ref={titleRef}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
          onClick={onSubmitHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
