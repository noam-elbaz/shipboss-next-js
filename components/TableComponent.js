import Button from "./Button";

export default function TableComponent({ data, actions }) {

  const { cols, rows } = data;
  
  return (
    <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded">
      <table className="min-w-full table-fixed divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            {cols.map((column, index) => (
              <th
                key={index}
                className="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 px-6 sm:px-8"
              >
                {column}
              </th>
            ))}
            {actions && (
              <th className="py-3.5 pr-3 text-right text-sm font-semibold text-gray-900 px-6 sm:px-8">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {rows.map((row, index) => (
            <tr key={index} className="even:bg-gray-50 pr-0">
              <td className="py-4 text-sm text-gray-500 px-6 sm:px-8 ">
                {row.id}
              </td>
              <td className="py-4 text-sm text-gray-500 px-6 sm:px-8">
                {row.date}
              </td>
              <td className="py-4 text-sm text-gray-500 px-6 sm:px-8">
                {row.total}
              </td>
              <td className="py-4 text-sm text-gray-500 px-6 sm:px-8">
                <div className="flex place-items-center space-x-2">
                  {row.status === "Paid" ? (
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  ) : (
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  )}
                  <div>{row.status}</div>
                </div>
              </td>
              {actions && (
                <td className="py-4 px-6 sm:px-8 text-sm space-x-2 flex justify-end">
                  <Button label="Edit" />
                  <Button label="Delete" />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
