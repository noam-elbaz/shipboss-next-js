export default function CardTitle({ title, children, button, action }) {
  return (
    <div className="">
      {/* CARD TITLE */}
      <div className="px-4 sm:px-6 flex items-center justify-between">
        <div className="py-3 sm:py-5 shrink-0">
          <h1 className="text-md sm:text-xl font-semibold text-gray-900">
            {title}
          </h1>
        </div>

        {button && (
          <div className="">
            <button
              onClick={action}
              type="button"
              className="items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              {button}
            </button>
          </div>
        )}

        {children && <div className="">{children}</div>}
      </div>
    </div>
  );
}
