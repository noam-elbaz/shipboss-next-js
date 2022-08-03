export default function CardTitle({ title, children, button, action }) {
  return (
    <div className="">
      {/* CARD TITLE */}
      <div className="px-4 sm:px-6 sm:flex sm:items-center w-full justify-between">
        <div className="py-5 ">
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
        </div>

        {button && (
          <button
            onClick={action}
            type="button"
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            {button}
          </button>
        )}

        {children && <>{children}</>}
      </div>
    </div>
  );
}
