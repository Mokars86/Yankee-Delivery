const History = () => {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50 pb-safe pt-safe px-5 animate-fade-in relative z-10">
          <div className="page-header sticky top-0 bg-gray-50 z-20 pb-4 mb-4">
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Delivery History</h1>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center text-center pb-20 mt-10">
             <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">📜</span>
             </div>
             <h2 className="text-xl font-bold text-gray-800 mb-2">No past deliveries</h2>
             <p className="text-gray-500 max-w-[250px]">When you complete a delivery, it will appear here.</p>
          </div>
      </div>
    );
};

export default History;
