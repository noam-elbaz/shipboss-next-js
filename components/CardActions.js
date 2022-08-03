export default function CardActions({ children }) {
  return (
    <div className="px-4 py-5 sm:px-6">
      {/* CARD ACTIONS or OTHER ADDITIONAL SECTION */}
      <div className="sm:flex sm:items-center w-full justify-between">
        {children}
      </div>
    </div>
  );
}
