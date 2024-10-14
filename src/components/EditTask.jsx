import { useState } from "react";

const EditTask = ({ editingItem, setEditingItem, handleEdit }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (value, content) => {
    setEditingItem({ ...editingItem, [content]: value });
    value !== editingItem[content] && setIsDisabled(false);
  };

  return (
    <form className="space-y-4" action="#">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          عنوان تسک
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          value={editingItem?.title}
          onChange={(e) => handleChange(e.target.value, "title")}
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          توضیحات
        </label>
        <textarea
          value={editingItem?.description}
          onChange={(e) => handleChange(e.target.value, "description")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        />
      </div>

      <button
        type="submit"
        onClick={handleEdit}
        disabled={isDisabled}
        className={`w-full transition duration-300 hover:bg-pink-dark text-white bg-pink-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
          isDisabled
            ? "bg-gray-300 px-4 py-2 rounded-md cursor-not-allowed  hover:bg-gray-300"
            : ""
        }`}>
        ویرایش تسک
      </button>
    </form>
  );
};

export default EditTask;
